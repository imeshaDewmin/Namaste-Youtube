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
        <div className="grid grid-flow-col m-2 p-4 shadow-lg">

            <div className="flex col-span-1">
                <img
                    className="h-7 cursor-pointer"
                    alt="menu"
                    src={MENU_ICON_URL}
                    onClick={handleToggleMenu}
                />
                <img
                    className="h-9 ml-2"
                    alt="ytLogo"
                    src={YOUTUBE_LOGO_URL}
                />
            </div>

            <div className="col-span-10 text-center relative">

                <input
                    className="w-1/2 border border-gray-400 rounded-l-full p-2"
                    type="text"
                    placeholder="Search"
                    value={inputText}
                    onChange={handleInputChange}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />

                <button className="border border-gray-400 py-2 px-4 
                rounded-r-full bg-black/40 font-bold text-white"
                    onClick={handleSearch}>
                    🔍︎
                </button>

                {showSuggestions && (
                    <div className="absolute bg-white w-1/2 mx-auto left-0 right-6 border border-gray-100
                    rounded-lg shadow-lg text-left">
                        {suggestions?.map((item, index) => (
                            <div
                                key={index}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
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

            <div className="col-span-1">
                <img className="h-8" alt="userIcon" src={USER_ICON_URL} />
            </div>

        </div>
    );
};

export default Header;