import CommentBox from "./CommentBox";
import { liveChatMock } from "../utils/mockLiveChat";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat, resetChat } from "../redux/liveChatSlice";

const LiveChat = () => {

    const dispatch = useDispatch();

    const chatData = useSelector(store => store.liveChat.liveChats);

    const message = useRef("");

    useEffect(() => {

        let index = 0;

        const interval = setInterval(() => {

            if (index === liveChatMock.length) {
                clearInterval(interval);
                return;
            }
            //Live chat Api (Long) polling
            const chatMessage = liveChatMock[index]
            dispatch(addChat(chatMessage));

            index++
        }, 1400)

        return () => {
            clearInterval(interval);
            dispatch(resetChat());
        }
    }, [dispatch])

    const handleSendMessage = () => {
        const name = "Anonymous"
        const text = message.current.value

        if (!text.trim()) return;

        dispatch(addChat({
            id: Date.now(),
            name, text
        }))
        message.current.value = "";
    }

    return (
        <>
            <div className="ml-0 sm:ml-1 w-full sm:w-[450px] h-[300px] sm:h-[500px] p-2 border border-black 
         bg-slate-200/50 rounded-lg flex flex-col-reverse gap-3 overflow-y-auto">
                {chatData?.map((chat) =>
                    <CommentBox
                        key={chat.id}
                        data={chat}
                    />)}
            </div>

            <form className="flex"
                onSubmit={(e) => e.preventDefault()}>
                <input className="m-2 p-2 border w-full sm:w-[350px] rounded-md min-w-0" type="text"
                    placeholder="Enter message"
                    ref={message} />
                <button className="m-2 p-2 rounded-md bg-red-100 shrink-0"
                    onClick={handleSendMessage}>
                    Send
                </button>
            </form>
        </>
    )
}
export default LiveChat;