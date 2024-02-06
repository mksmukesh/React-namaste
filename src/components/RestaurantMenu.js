
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
  const { resId } = useParams();

  const [resInfo,itemInfo]= useRestaurantInfo(resId)
  console.log(resInfo)
  // const {category}=resInfo;
  if(resInfo===0){
    return(
      <Shimmer/>
    )
  }
  const {name,cuisines,costForTwoMessage}=itemInfo;
  
    
  return (
    <div className=" py-2 text-center">
      <h1 className="font-extrabold text-lg">{name}</h1>
      <p className="font-serif py-5">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
{/*            categories accordian    */}

      <div className="text-center">
        {resInfo.map((category,index)=>
          (<RestaurantCategory  key={index} data={category} />)
        )}
        
        </div>      
    </div>
  );
}

export default RestaurantMenu;
