import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MENU_URL } from "../utils/constants";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState([]);
  const [itemCards, setItemCards] = useState([]);

  const { resId } = useParams();
  useEffect(() => {
    fetchData();
    console.log("Useeffect called ");
  }, [resId]);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER");
      const json = await data.json();
      // console.log(json.data)
    //   console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info)
      const {itemCards}  =
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    //   console.log(fetchedItemCards);cards[2].card.card.itemCards
    //   setItemCards(data1.itemCards);
    //   console.log(data1.itemCards)
      setResInfo(json?.data?.cards[0]?.card?.card?.info);
      setItemCards(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card);
      setItemCards(itemCards)
      console.log(itemCards)
    } catch (error) {
      console.log("Error fetching data :", error);
    }
  };

  return (
    <div>
      <h1>{resInfo?.name}</h1>
      <p>
        {resInfo?.cuisines?.join(", ")} - {resInfo?.costForTwoMessage}
      </p>

      <h3>Menu</h3>
      <ul>
        {itemCards && itemCards.map((item) => (
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
