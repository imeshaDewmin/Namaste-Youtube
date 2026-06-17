const FilterButton = (props) => {

    const { btnName } = props;
    return (
        <button className="m-4 px-5 bg-gray-300/40 rounded-md font-bold">
            {btnName}
        </button>
    )
}
export default FilterButton;