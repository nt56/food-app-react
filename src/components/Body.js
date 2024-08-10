import RestaurantCard, { withIsOpenLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]); //state variable -> whenever state variable updates react will re-render the component

  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //another copy of the reastaurants for filtered rest

  const [searchText, setSearchText] = useState("");

  const RestaurantCardOpen = withIsOpenLabel(RestaurantCard);

  //use Effect hook -> this will call after the compelition of component render cycle.
  useEffect(() => {
    fetchData();
  }, []);

  //fechData function logic
  const fetchData = async () => {
    const data = await fetch(API); //fetching api using async await

    const json = await data.json(); //converting data into json

    //optional chaining -> if data is not present in current object then it will not go in next object
    //new live data displaying after rendering using optional chaining
    //this is new latest live data
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    //another copy of restaurantList in filtered list
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Looks Like You Are Offline...!!</h1>
        <h2>Please Check Your Internet Connection</h2>
      </div>
    );
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border-solid border-black"
            placeholder="Enter Restaurant Name"
            value={searchText}
            //it will update the search text
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter the res cards and update the UI According to search
              const filteredRestaurantList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurantList);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              //filter logic
              const filteredList = listOfRestaurant.filter(
                (res) => res?.info?.avgRating > 4.2
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/** if res is open then show label open */}
            {restaurant.info.isOpen ? (
              <RestaurantCardOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
