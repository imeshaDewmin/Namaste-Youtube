import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-3 shadow-lg col-span-1">

      <ul className="space-y-5 pb-4 cursor-pointer">
        <Link to="/"><li className="font-bold">🏠 Home</li></Link>
        <li>🎬 Shorts</li>
      </ul>

      <hr className="" />

      <h1 className="font-bold pt-5">📺 Subscriptions</h1>

      <ul className="space-y-5 pt-4 pb-4 cursor-pointer">
        <li>🎵 Music</li>
        <li>🏅 Sports</li>
        <li>🎮 Gaming</li>
        <li>🎬 Movies</li>
      </ul>

      <hr className="" />

      <h1 className="font-bold pt-5">👤 You</h1>

      <ul className="space-y-5 pt-4 cursor-pointer">
        <li>📜 History</li>
        <li>📂 Playlists</li>
        <li>⏰ Watch Later</li>
        <li>👍 Liked Videos</li>
        <li>📥 Downloads</li>
      </ul>

    </div>
  )
}

export default SideBar;