import { commentsData } from "../utils/mockComments";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

const CommentsContainer = () => {
    return (
        <div className="m-2 sm:m-5 p-2">
            <h1 className="text-xl sm:text-2xl font-bold">Comments</h1>
            <div className="pt-2">
                <CommentList comments={commentsData} />
            </div>
        </div>
    )
}
export default CommentsContainer;