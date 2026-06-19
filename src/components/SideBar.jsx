import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../redux/appSlice";

const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const dispatch = useDispatch();

  if (!isMenuOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={() => dispatch(toggleMenu())}
      />

      <div
        className="
          fixed top-0 left-0 h-full w-64 bg-white z-50 overflow-y-auto
          md:static md:h-auto md:w-auto md:z-auto
          p-3 shadow-lg col-span-1
        "
      >

        <ul className="space-y-5 pb-4 cursor-pointer">
          <Link to="/" onClick={() => dispatch(toggleMenu())}>
            <li className="font-bold flex items-center gap-2">
              <span>🏠</span><span>Home</span>
            </li>
          </Link>
          <li className="flex items-center gap-2">
            <span>🎬</span><span>Shorts</span>
          </li>
        </ul>

        <hr />

        <h1 className="font-bold pt-5 flex items-center gap-2">
          <span>📺</span><span>Subscriptions</span>
        </h1>

        <ul className="space-y-5 pt-4 pb-4 cursor-pointer">
          <li className="flex items-center gap-2"><span>🎵</span><span>Music</span></li>
          <li className="flex items-center gap-2"><span>🏅</span><span>Sports</span></li>
          <li className="flex items-center gap-2"><span>🎮</span><span>Gaming</span></li>
          <li className="flex items-center gap-2"><span>🎬</span><span>Movies</span></li>
        </ul>

        <hr />

        <h1 className="font-bold pt-5 flex items-center gap-2">
          <span>👤</span><span>You</span>
        </h1>

        <ul className="space-y-5 pt-4 cursor-pointer">
          <li className="flex items-center gap-2"><span>📜</span><span>History</span></li>
          <li className="flex items-center gap-2"><span>📂</span><span>Playlists</span></li>
          <li className="flex items-center gap-2"><span>⏰</span><span>Watch Later</span></li>
          <li className="flex items-center gap-2"><span>👍</span><span>Liked Videos</span></li>
          <li className="flex items-center gap-2"><span>📥</span><span>Downloads</span></li>
        </ul>

      </div>
    </>
  )
}

export default SideBar;