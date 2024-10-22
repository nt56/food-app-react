import ItemList from "./ItemList";
import { IoIosArrowDown } from "react-icons/io";

const RestaurantCategory = ({ data, showItems, handleShowItem }) => {
  const handleClick = () => {
    handleShowItem();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        {/* Header */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>
            <IoIosArrowDown />
          </span>
        </div>

        {/* Accordian Body */}
        <div>{showItems && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
