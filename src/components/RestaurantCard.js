import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="m-2 p-2 w-48   bg-slate-300 rounded-md ">
     
      <div className="aspect-content">
        <img
          className="rounded-lg "
          alt="image"
          src={CDN_URL + resData?.info?.cloudinaryImageId}
        />
      <div className="mt-4">
        <h3 className="font-bold text-md">{resData?.info?.name}</h3>
        <h4 className="font-serif">{resData?.info?.cuisines.join(", ")}</h4>
        <h4 className="font-sans">{resData?.info?.costForTwo}</h4>
        <h4 className="font-serif">{resData?.info?.avgRating}</h4>
        <h4 className="font-serif" >{resData?.info?.sla?.slaString}</h4>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
