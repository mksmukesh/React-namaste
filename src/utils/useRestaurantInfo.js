import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  const [itemInfo, setItemInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, [resId]);
  
  const fetchData = async () => {
    try {
      const response = await fetch(
        MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
     setItemInfo(data?.data?.cards[0]?.card?.card?.info);
     const category=data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((e)=>e.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
     console.log(category)

    setResInfo(category);
    
    } catch (error) {
      console.error("Error fetching data:", error);
      
    }
    
  };

  return [resInfo,itemInfo];
};
export default useRestaurantInfo;
