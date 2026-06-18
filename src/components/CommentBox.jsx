import { USER_ICON_URL } from "../utils/constants";

const CommentBox = (props) => {
    const { name, text } = props.data;
    return (
        <div className="flex bg-gray-200 p-3 w-[68%] rounded-lg">
            <img className="w-5 h-5" alt="userImg" src={USER_ICON_URL} />
            <div>
                <p className="font-bold text-sm">{name}</p>
                <p className="text-sm">{text}</p>
            </div>
        </div>
    )
}
export default CommentBox