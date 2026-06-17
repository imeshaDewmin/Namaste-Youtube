import FilterButton from "./FilterButton"

const ButtonList = () => {

  const list = ["All", "Music", "Live", "Cricket", "Podcasts", "Cinema", "Drama", "Asian Music", "Skills", "Fifa", "New to you"];

  return (
    <div className="flex">
      {list.map((button, index) => (
        <FilterButton
          key={index}
          btnName={button} />
      ))}
    </div>
  )
}
export default ButtonList;