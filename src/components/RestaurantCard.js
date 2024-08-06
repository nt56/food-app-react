import { CDN_URL } from "../utils/constants";
import { AiOutlineStar } from "react-icons/ai";
import { FiClock } from "react-icons/fi";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all">
      <div>
        <img
          className="w-[250px] h-[150px] rounded-lg"
          alt="food-img"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <div>
        <h3 className="font-bold text-lg py-4">{name}</h3>
        <hr />
        <em>{cuisines.join(", ")}</em>
        <h4 className="avg-rating flex items-center">
          <span className="icons">
            <AiOutlineStar />
          </span>
          <span>{avgRating} stars</span>
        </h4>
        <h4 className="item-price">
          <span style={{ marginLeft: "4px" }}></span> <span>{costForTwo}</span>
        </h4>
        <h4 className="time flex items-center">
          <span className="icons">
            <FiClock />
          </span>
          <span>{deliveryTime} minutes</span>
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
