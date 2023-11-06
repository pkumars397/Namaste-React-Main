import RestrauntCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const filterRestaurant = (searchTxt, restaurant) => {
  const data = restaurant.filter((resto) =>
    resto?.info?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase())
  );
  return data;
};

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9621948&lng=77.7115841&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log(data);
    const dataJSON = await data.json();
    console.log(dataJSON);
    setAllRestaurant(
      dataJSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      dataJSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  //  Early rendering,stoping our component to render.(Conditional rendering)
  if (!allRestaurant) return null;

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-text"
          value={searchTxt}
          placeholder="Search"
          onChange={(e) => {
            setSearchTxt(e?.target?.value);
          }}
        ></input>
        <button
          className="search-btn "
          onClick={() => {
            setFilteredRestaurant(filterRestaurant(searchTxt, allRestaurant));
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-List">
        {filteredRestaurant.map((resto) => {
          return <RestrauntCard {...resto?.info} key={resto?.info?.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
