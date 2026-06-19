import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-1 sm:col-span-11 w-full overflow-x-hidden">
      <ButtonList />
      <VideoContainer />
    </div>
  )
}
export default MainContainer;