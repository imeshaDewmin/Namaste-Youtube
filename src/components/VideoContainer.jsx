import { useSelector } from "react-redux";
import useFetchPopularVideos from "../customHooks/useFetchPopularVideos";
import VideoCard from "./VideoCard";

const VideoContainer = () => {

    useFetchPopularVideos();

    const popularVideos = useSelector(store => store.videos.popularVideos)
    if (!popularVideos) return null;


    return (
        <div className="pl-3 grid grid-cols-3 pb-2 gap-3">
            {popularVideos.map((video, index) => <VideoCard
                key={video.id}
                info={video} />)}
        </div>
    )
}
export default VideoContainer;