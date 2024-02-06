import {useState} from 'react'
import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data }) => {
  //    console.log(data);
  const { title, itemCards } = data.card.card;
  const [showItems,setShowItems]=useState(false)

  const handleClick=()=>{
    console.log("Clicked")
    setShowItems(!showItems)

  }
  return (
    /* accordian header */
    <div>
      <div className="mx-auto my-4 p-2  bg-slate-180 shadow-lg w-6/12">
        <div className=" flex justify-between cursor-pointer" onClick={handleClick} >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          
          <span>🔽</span>
          </div>

          <div>
            {showItems && <ItemList items={itemCards} />}
          </div>
       
      </div>
    </div>
  );
};
export default RestaurantCategory;
