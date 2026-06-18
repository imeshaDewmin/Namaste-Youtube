import CommentBox from "./CommentBox";

const CommentList = ({ comments }) => {
    return (
        comments.map((comment, index) =>
            <div key={index} className="m-2 p-2">
                <CommentBox
                    data={comment} />
                <div className="relative ml-2 pl-4 mt-2">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-black"></div>
                    <CommentList comments={comment.replies} />
                </div>
            </div>
        )
    )
}
export default CommentList;