import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useParams } from "react-router-dom";
import CommentsContainer from "../components/CommentsContainer";
import LiveChat from "../components/LiveChat";

const WatchVideoPage = () => {

    const params = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, [])

    return (
        <div className="flex flex-col overflow-x-hidden">
            <div className="flex flex-col lg:flex-row">
                <div className="col-span-11 px-2 sm:px-5 w-full">
                    <iframe width="100%" height="500" className="max-w-full aspect-video lg:h-[500px]" src={`https://www.youtube.com/embed/${params.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                </div>
                <div className="w-full lg:w-auto">
                    <LiveChat />
                </div>

            </div>
            <CommentsContainer />
        </div>
    )
}
export default WatchVideoPage;