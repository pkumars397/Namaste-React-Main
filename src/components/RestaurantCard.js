import { IMG_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestrauntCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="card w-64 p-2 m-2 shadow-md">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt="RestrauntImage"
        className="w-64 h-64"
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.slice(0, 4).join(",")}</h3>
      <h4>{avgRating} </h4>
      <h4>
        Developed by {user.name} and EmailId: {user.email}
      </h4>
    </div>
  );
};

export default RestrauntCard;
