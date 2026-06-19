import { USER_ICON_URL } from "../utils/constants";

const CommentBox = (props) => {
    const { name, text } = props.data;
    return (
        <div className="flex bg-gray-200 p-2 sm:p-3 w-full sm:w-[68%] rounded-lg">
            <img className="w-5 h-5 shrink-0" alt="userImg" src={USER_ICON_URL} />
            <div className="ml-2 min-w-0">
                <p className="font-bold text-sm">{name}</p>
                <p className="text-sm break-words">{text}</p>
            </div>
        </div>
    )
}
export default CommentBox