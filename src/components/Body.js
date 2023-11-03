import RestrauntCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";

const filterRestaurant = (searchTxt, restaurant) => {
  const data = restaurant.filter((resto) =>
    resto.info.name.includes(searchTxt)
  );
  return data;
};

const Body = () => {
  let flag = false;
  const [restaurant, setRestaurant] = useState(restaurantList);
  const [searchTxt, setSearchTxt] = useState("");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-text"
          value={searchTxt}
          placeholder="Search"
          onChange={(e) => {
            // updating the state of searchTxt
            setSearchTxt(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            if (!flag) {
              const data = filterRestaurant(searchTxt, restaurant);
              setRestaurant(data);
              flag = true;
            } else if (flag) {
              const data = filterRestaurant(searchTxt, restaurantList);
              setRestaurant(data);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-List">
        {restaurant.map((resto) => {
          return <RestrauntCard {...resto.info} key={resto.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
