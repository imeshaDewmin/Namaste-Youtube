import { useDispatch } from "react-redux";
import { MENU_ICON_URL, USER_ICON_URL, YOUTUBE_LOGO_URL } from "../utils/constants";
import { toggleMenu } from "../redux/appSlice";

const Header = () => {

    const dispatch = useDispatch();

    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col m-2 p-4 shadow-lg">
            <div className="flex col-span-1">

                <img className="h-7 cursor-pointer" alt="menu" src={MENU_ICON_URL}
                    onClick={handleToggleMenu} />
                <img className="h-9 ml-2" alt="ytLogo" src={YOUTUBE_LOGO_URL} />
            </div>

            <div className="col-span-10 text-center">
                <input className=" w-1/2 border border-gray-400 rounded-l-full p-2"
                    type="text" placeholder="Search" />
                <button className="border border-gray-400 py-2 px-4 
                rounded-r-full bg-black/40 font-bold text-white">
                    🔍︎
                </button>
            </div>

            <div className="col-span-1">
                <img className="h-8" alt="userIcon" src={USER_ICON_URL} />
            </div>
        </div>
    )
}
export default Header;