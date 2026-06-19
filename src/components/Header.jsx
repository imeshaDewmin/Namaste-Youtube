import { useDispatch, useSelector } from "react-redux";
import {
    MENU_ICON_URL,
    USER_ICON_URL,
    YOUTUBE_LOGO_URL
} from "../utils/constants";

import { toggleMenu } from "../redux/appSlice";
import { useState } from "react";
import useSearch from "../customHooks/useSearch";
import { setSearchResults } from "../redux/searchSlice";

const Header = () => {

    const popularVideos = useSelector(store => store.videos.popularVideos);

    const dispatch = useDispatch();

    const [inputText, setInputText] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputText(value);

        if (value.length === 0) {
            dispatch(setSearchResults([]));
        }
    };

    const { suggestions } = useSearch(inputText);

    const handleSearch = () => {
        const searchResults = popularVideos.filter((vid) => vid.snippet.title.toLowerCase().includes(inputText.toLowerCase()));
        dispatch(setSearchResults(searchResults));
    }

    return (
        <div className="grid grid-cols-3 sm:grid-cols-[auto_1fr_auto] items-center m-2 p-2 sm:p-4 shadow-lg gap-2">

            <div className="flex items-center col-span-1">
                <img
                    className="h-6 sm:h-7 cursor-pointer"
                    alt="menu"
                    src={MENU_ICON_URL}
                    onClick={handleToggleMenu}
                />
                <img
                    className="h-7 sm:h-9 ml-2"
                    alt="ytLogo"
                    src={YOUTUBE_LOGO_URL}
                />
            </div>

            <div className="col-span-2 sm:col-span-1 flex justify-center">

                <div className="relative flex w-full sm:w-1/2">
                    <input
                        className="flex-1 min-w-0 border border-gray-400 rounded-l-full p-1 sm:p-2 text-sm sm:text-base"
                        type="text"
                        placeholder="Search"
                        value={inputText}
                        onChange={handleInputChange}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />

                    <button
                        className="border border-gray-400 py-1 px-2 sm:py-2 sm:px-4 
                rounded-r-full bg-black/40 font-bold text-white text-sm sm:text-base shrink-0"
                        onClick={handleSearch}
                    >
                        🔍︎
                    </button>

                    {showSuggestions && (
                        <div className="absolute top-full left-0 w-full bg-white border border-gray-100
            rounded-lg shadow-lg text-left z-10 mt-1">
                            {suggestions?.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-2 hover:bg-gray-200 cursor-pointer text-sm sm:text-base"
                                    onMouseDown={() => {
                                        setInputText(item)
                                        setShowSuggestions(false)
                                    }}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>

            <div className="col-span-1 flex justify-end">
                <img className="hidden md:inline-block h-7 sm:h-8" alt="userIcon" src={USER_ICON_URL} />
            </div>

        </div>
    );
};

export default Header;