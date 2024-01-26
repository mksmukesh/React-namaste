import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      {console.log("hello")}
      <div className="res-name">
        <img
          className="card-logo"
          alt="image"
          src={CDN_URL + resData?.info?.cloudinaryImageId}
        />

        <h3>{resData?.info?.name}</h3>
        <h4>{resData?.info?.cuisines.join(", ")}</h4>
        <h4>{resData?.info?.costForTwo}</h4>
        <h4>{resData?.info?.avgRating}</h4>
        <h4>{resData?.info?.sla?.slaString}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
