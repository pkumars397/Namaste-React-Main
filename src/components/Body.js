import RestrauntCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurant } from "../utils/helper";
import Offline from "./Offline";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const { user, setUser } = useContext(UserContext);

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

  // const isOnline = useOnline();
  // // console.log(isOnline);
  // if (!isOnline) {
  //   return <Offline />;
  // }
  // if (!allRestaurant) return null;

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-text bg-pink-50 py-1 mx-1 my-2 border-2	 border-solid border-red-300 focus:bg-green-200"
          value={searchTxt}
          placeholder="Search"
          onChange={(e) => {
            setSearchTxt(e?.target?.value);
          }}
        ></input>
        <button
          className="search-btn bg-lime-600 hover:bg-lime-500 p-1 rounded-sm text-white"
          onClick={() => {
            setFilteredRestaurant(filterRestaurant(searchTxt, allRestaurant));
          }}
        >
          Search
        </button>
        <input
          value={user.value}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        ></input>
        <input
          value={user.value}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
      </div>
      <div className="restraunt-List flex flex-wrap">
        {filteredRestaurant?.map((resto) => {
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
