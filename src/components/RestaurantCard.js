import { CDN_URL } from "../utils/constants";
import { AiOutlineStar } from "react-icons/ai";
import { FiClock } from "react-icons/fi";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[260px] h-[450px] bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer border border-gray-200">
      <div>
        <img
          className="w-[260px] h-[160px] rounded-2xl object-cover"
          alt="food-img"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <div className="p-4">
        <h3 className="font-extrabold text-xl text-gray-800 pb-2">{name}</h3>
        <em className="text-gray-600 text-sm block pb-2">
          {cuisines.join(", ")}
        </em>

        <div className="flex items-center text-gray-700 text-sm font-medium gap-1 pb-2">
          <AiOutlineStar className="text-yellow-500 text-lg" />
          <span>{avgRating} stars</span>
        </div>

        <div className="text-gray-700 text-sm font-medium pb-2">
          <span className="font-semibold">Price: </span> {costForTwo}
        </div>

        <div className="flex items-center text-gray-700 text-sm font-medium gap-1">
          <FiClock className="text-gray-500 text-lg" />
          <span>{sla?.deliveryTime} min delivery</span>
        </div>
      </div>
    </div>
  );
};

//Higher Order Component --> New Card with isOpen or not Label
//returns enhanced component
export const withIsOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md z-10">
          Open
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
