import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants"

const useSearch = (query) => {

    const [suggestions, setSuggestions] = useState([]);

    const searchYouTube = async () => {
        const data = await fetch(`${YOUTUBE_SEARCH_API}${query}`)
        const json = await data.json();

        setSuggestions(json[1]);

    }

    useEffect(() => {
        const timer = setTimeout(() => searchYouTube(), 200)

        return () => {
            clearTimeout(timer);
        }
    }, [query])


    return { suggestions };
}

export default useSearch;