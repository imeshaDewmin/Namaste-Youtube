import { useDispatch } from "react-redux";
import {
    MENU_ICON_URL,
    USER_ICON_URL,
    YOUTUBE_LOGO_URL
} from "../utils/constants";

import { toggleMenu } from "../redux/appSlice";
import { useState } from "react";
import useSearch from "../customHooks/useSearch";

const Header = () => {

    const dispatch = useDispatch();

    const [inputText, setInputText] = useState("");

    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputText(value);
    };

    const { suggestions } = useSearch(inputText);

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
                />

                <button className="border border-gray-400 py-2 px-4 
                rounded-r-full bg-black/40 font-bold text-white">
                    🔍︎
                </button>

                {suggestions?.length > 0 && (
                    <div className="absolute bg-white w-1/2 mx-auto left-0 right-0 border shadow-lg text-left">
                        {suggestions?.map((item, index) => (
                            <div
                                key={index}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
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