import CommentBox from "./CommentBox";

const CommentList = ({ comments }) => {
    return (
        comments.map((comment, index) =>
            <div key={index} className="m-1 sm:m-2 p-1 sm:p-2">
                <CommentBox
                    data={comment} />
                <div className="relative ml-1 sm:ml-2 pl-2 sm:pl-4 mt-2">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-black"></div>
                    <CommentList comments={comment.replies} />
                </div>
            </div>
        )
    )
}
export default CommentList;