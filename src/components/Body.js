import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //state variable -> whenever state variable updates react will re-render the component
  const [listOfRestaurant, setListOfRes] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
