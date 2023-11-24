export const filterRestaurant = (searchTxt, restaurant) => {
  const data = restaurant.filter((resto) =>
    resto?.info?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase())
  );
  return data;
};
