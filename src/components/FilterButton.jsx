const FilterButton = (props) => {

    const { btnName } = props;
    return (
        <button className="m-2 sm:m-4 px-3 sm:px-5 py-1 bg-gray-300/40 rounded-md font-bold text-sm sm:text-base whitespace-nowrap shrink-0">
            {btnName}
        </button>
    )
}
export default FilterButton;