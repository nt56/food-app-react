import { useState } from "react";
import useReastaurantMenu from "../utils/useReastaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useReastaurantMenu(resId);

  const handleShowItem = (currentIndex) => {
    if (currentIndex === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(currentIndex);
    }
  };

  if (resInfo === null) return <ShimmerMenu />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center w-full">
      <h1 className="font-bold my-6 text-3xl">{name}</h1>

      <h3 className=" font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>

      {/* categories accordian */}
      {categories.map((category, index) => (
        //controlled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          handleShowItem={() => handleShowItem(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
