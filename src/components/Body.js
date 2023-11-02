import RestrauntCard from "./RestaurantCard";
import { restaurantList } from "../config";

const Body = () => {
  return (
    <div className="restraunt-List">
      {restaurantList.map((resto) => {
        return <RestrauntCard {...resto.info} key={resto.info.id} />;
      })}
    </div>
  );
};

export default Body;
