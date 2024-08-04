import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //state variable -> whenever state variable updates react will re-render the component
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  //another copy of the reastaurants for filtered rest
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  //note -> whenever the react variable upadtes react triggers the reconcilition cycle(re renders the componenets)

  //If no dependencie array in useEffect hook then useEffect is called on every render
  //if the dependency array is empty([]) then useEffecct is called on initial render (just once)
  //if the dependency array is [btnName] then useEffecct is called every time btnName is updated
  //it will always called on initial render
  //use Effect hook -> this will call after the compelition of component render cycle.
  useEffect(() => {
    fetchData();
  }, []);

  //fechData function logic
  const fetchData = async () => {
    //fetching api using async await
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    //converting data into json
    const json = await data.json();

    //optional chaining -> if data is not present in current object then it will not go in next object

    //new live data displaying after rendering using optionall chaining
    //this is new latest live data
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    //another copy of restaurantList in filtered list
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            //it will update the search text
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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

        <button
          className="filter-btn"
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

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
