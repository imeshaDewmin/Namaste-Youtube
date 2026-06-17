import { useSelector } from "react-redux";
import useFetchPopularVideos from "../customHooks/useFetchPopularVideos";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {

    useFetchPopularVideos();

    const popularVideos = useSelector(store => store.videos.popularVideos)
    if (!popularVideos) return null;


    return (
        <div className="pl-3 grid grid-cols-3 pb-2 gap-3">
            {popularVideos.map((video, index) => <Link key={video.id} to={`/watch/${video.id}`}>
                <VideoCard info={video} />
            </Link>
            )}
        </div>
    )
}
export default VideoContainer;