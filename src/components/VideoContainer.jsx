import { useSelector } from "react-redux";
import useFetchPopularVideos from "../customHooks/useFetchPopularVideos";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {

    useFetchPopularVideos();
    const searchResults = useSelector(store => store.search.searchResults);

    const popularVideos = useSelector(store => store.videos.popularVideos)
    if (!popularVideos) return null;

    const videosToShow = searchResults?.length > 0 ? searchResults : popularVideos;


    return (
        <div className="pl-3 grid grid-cols-3 pb-2 gap-3">
            {videosToShow.map((video, index) => <Link key={video.id} to={`/watch/${video.id}`}>
                <VideoCard info={video} />
            </Link>
            )}
        </div>
    )
}
export default VideoContainer;