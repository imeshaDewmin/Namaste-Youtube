import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../redux/searchSlice";

const useSearch = (query) => {

    const searchCache = useSelector(store => store.search);

    const dispatch = useDispatch();

    const [suggestions, setSuggestions] = useState([]);

    const searchYouTube = async () => {
        const data = await fetch(`${YOUTUBE_SEARCH_API}${query}`)
        const json = await data.json();

        setSuggestions(json[1]);

        dispatch(cacheResults({
            [query]: json[1]
        }))
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[query]) {
                setSuggestions(searchCache[query])
            }
            else {
                searchYouTube();
            }
        }, 200)

        return () => {
            clearTimeout(timer);
        }
    }, [query])


    return { suggestions };
}

export default useSearch;