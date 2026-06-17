import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../redux/videoSlice";

const useFetchPopularVideos = () => {

    const popularVideos = useSelector(store => store.videos.popularVideos);

    const dispatch = useDispatch();

    const fetchPopularVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();

        dispatch(addPopularVideos(json.items));

    }

    useEffect(() => {
        !popularVideos &&
            fetchPopularVideos();
    }, []);

}

export default useFetchPopularVideos;