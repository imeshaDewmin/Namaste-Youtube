import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useParams } from "react-router-dom";
import CommentsContainer from "../components/CommentsContainer";

const WatchVideoPage = () => {

    const params = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, [])

    return (
        <div className="flex flex-col">
            <div className="col-span-11 px-5">
                <iframe width="1000" height="500" src={`https://www.youtube.com/embed/${params.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </div>
            <CommentsContainer />
        </div>
    )
}
export default WatchVideoPage;