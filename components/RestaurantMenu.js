
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../utils/useRestaurantInfo";

function RestaurantMenu() {
  const { resId } = useParams();

  const [resInfo,itemInfo]= useRestaurantInfo(resId)
  
  if(resInfo===0){
    return(
      <Shimmer/>
    )
  }
  const {name,cuisines,costForTwoMessage}=itemInfo;
  // const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  console.log(itemInfo)
  // console.log(resInfo)
     const {itemCards}=resInfo;
  return (
    <div>
      <h1>{itemInfo.name}</h1>
      <p>
        {itemInfo?.cuisines?.join(", ")} - {itemInfo?.costForTwoMessage}
      </p>

      <h3>Menu</h3>
      <ul>
        {itemCards &&
          itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} -Rs.
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
