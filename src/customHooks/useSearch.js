import { useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants"
import { useDispatch } from "react-redux";
import { showSuggestions } from "../redux/searchSlice";

const useSearch = (query) => {

    const dispatch = useDispatch();

    const searchYouTube = async () => {
        const data = await fetch(`${YOUTUBE_SEARCH_API}${query}`)
        const json = await data.json();

        dispatch(showSuggestions(json));

    }

    useEffect(() => {
        searchYouTube();
    }, [query])
}

export default useSearch;