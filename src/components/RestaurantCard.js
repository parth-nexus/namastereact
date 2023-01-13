import { cloudinarybaseurl } from "../config";

export default RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  slaString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={`${cloudinarybaseurl}${cloudinaryImageId}`}></img>
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{slaString} ETA</h5>
    </div>
  );
};
