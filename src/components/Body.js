import RestrauntCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
    const dataJSON = await data.json();
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
          return (
            <Link to={"./restaurant/" + resto?.info?.id} key={resto?.info?.id}>
              <RestrauntCard {...resto?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
