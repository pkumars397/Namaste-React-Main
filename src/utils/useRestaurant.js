import { useState, useEffect } from "react";
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    restaurantData();
  }, []);

  async function restaurantData() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.3212198&lng=76.6154998&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurant(json?.data);
  }

  return restaurant;
};

export default useRestaurant;
