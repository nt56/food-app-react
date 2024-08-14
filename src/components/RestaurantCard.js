import { CDN_URL } from "../utils/constants";
import { AiOutlineStar } from "react-icons/ai";
import { FiClock } from "react-icons/fi";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] h-[450px] bg-gray-200 rounded-lg hover:bg-gray-300 transition-all shadow-xl">
      <div>
        <img
          className="w-[250px] h-[150px] rounded-lg"
          alt="food-img"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <div>
        <h3 className="font-bold text-lg py-4">{name}</h3>
        <em className="">{cuisines.join(", ")}</em>
        <h4 className="avg-rating flex items-center pt-1 gap-1">
          <span className="icons">
            <AiOutlineStar />
          </span>
          <span> {avgRating} stars</span>
        </h4>
        <h4 className="item-price pt-1 flex">
          <span style={{ marginLeft: "4px" }}></span> <span>{costForTwo}</span>
        </h4>
        <h4 className="time flex items-center pt-1 gap-1">
          <span className="icons">
            <FiClock />
          </span>
          <span>{sla?.deliveryTime} minutes</span>
        </h4>
      </div>
    </div>
  );
};

//Higher Order Component --> New Card with isOpen or not Label
//returns enhanced component
export const withIsOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-md">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
