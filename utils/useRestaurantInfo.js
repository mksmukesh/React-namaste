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
    
      setResInfo(
        data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card
      );
    
    } catch (error) {
      console.error("Error fetching data:", error);
      
    }
    
  };

  return [resInfo,itemInfo];
};
export default useRestaurantInfo;
