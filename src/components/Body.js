import RestaurantCard, { withIsOpenLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerHome from "./ShimmerHome";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]); //state variable -> whenever state variable updates react will re-render the component //whenever I have to filter then I use this state variaable

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
      <div className="flex flex-col items-center justify-center w-auto h-[100vh]">
        <h1 className="p-3 font-extrabold">Looks Like You Are Offline...!!</h1>
        <h2 className="font-extrabold">
          Please Check Your Internet Connection
        </h2>
      </div>
    );
  }

  return listOfRestaurant.length === 0 ? (
    <ShimmerHome />
  ) : (
    <div className="body flex flex-col items-center w-full">
      <div className="filter flex justify-center items-center w-[100%]">
        <div className="search m-4 p-4 flex items-center justify-center">
          <input
            type="text"
            className="w-96 p-3 text-lg font-semibold text-gray-800 bg-white border border-gray-300 
             rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-green-500 
             focus:border-green-500 transition-all duration-300 ease-in-out 
             placeholder-gray-500"
            placeholder="🔍 Enter Restaurant Name or Keyword"
            value={searchText}
            //it will update the search text
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-6 py-4 bg-green-700 m-4 rounded-lg text-white font-extrabold shadow-md 
             hover:bg-green-800 hover:scale-105 transition-all duration-300 ease-in-out
             active:scale-95 focus:ring-2 focus:ring-green-500"
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

        <div className="filter m-4 p-4 flex items-center">
          <button
            className="px-6 py-4 bg-red-500 rounded-lg text-white font-bold shadow-md
             hover:bg-red-600 hover:scale-105 transition-all duration-300 ease-in-out
             active:scale-95 focus:ring-2 focus:ring-red-400"
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

      <div className="flex w-auto flex-wrap items-center justify-center self-stretch">
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
