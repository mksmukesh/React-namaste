import { CDN_URL } from "../utils/constants";

const ItemList=({items})=>{
    console.log(items)
    // console.log(items[0].card.info.name)
    return(
        <div className="text-left  ">
            {items.map((item)=>
            <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-400">
                <span className="font-semibold">{item?.card?.info?.name}</span>
                <div > ₹{item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100 }</div>
               
            <div className="p-2 m-2 flex justify-between"> 
              <p className="text-xs"> {item?.card?.info?.description} </p>
              <div className="">
                
                <img 
                className="w-28 rounded-lg"
                alt="image"
                src={CDN_URL+item?.card?.info?.imageId }>

                </img>
                <button className="mx-2 px-7 rounded-lg shadow-lg bg-slate-600 text-white">Add+</button>
                </div>
            </div>
            </div>
            
            )}
        </div>


    )



}
export default ItemList;