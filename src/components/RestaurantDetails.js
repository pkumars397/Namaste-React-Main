import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const RestaurantDetails = () => {
  // How to Read dynamic url.
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <h1>Restaurant id:{resId}</h1>
        <img
          src={
            IMG_URL + restaurant.cards[0]?.card?.card?.info.cloudinaryImageId
          }
        />
        <h2>{restaurant?.cards[0]?.card?.card?.info.name}</h2>
        <h3>{restaurant?.cards[0]?.card?.card?.info.avgRatingString} stars</h3>
        <h4>{restaurant?.cards[0]?.card?.card?.info.costForTwoMessage}</h4>
      </div>
      {console.log(
        restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      )}
      <ul></ul>
    </div>
  );
};

export default RestaurantDetails;
