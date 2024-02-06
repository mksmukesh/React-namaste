import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStaus";
import Banner from "./Banner";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);

  const [searchRestro, setSearchRestro] = useState("");
  const [items,setItems]=useState([]);
  
  

  useEffect(() => {
    fetchData();
    console.log("useEffect called");
  }, []);

  const fetchData = () => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5869347&lng=77.23381859999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setListOfRestaurants(
          json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );
        // console.log(json.data.cards[4])
        setFilteredRestro(
          json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );
        setItems(json?.data?.cards[0].card.card.gridElements.infoWithStyle.info)
        console.log(items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const onlineInfo = useOnlineStatus();

  if(onlineInfo===false){
    return <h1>Looks like you're offline. Please check your internet conection.</h1>
  }

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-2">
      <div className="flex">
        <div className="search">
          <input
            type="text"
            className="ml-2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            value={searchRestro}
            onChange={(e) => setSearchRestro(e.target.value)}
          ></input>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 m-2"
            onClick={() => {
              const filteredRestro = ListOfRestaurants.filter((restro) =>
                restro.info.name
                  .toLowerCase()
                  .includes(searchRestro.toLowerCase())
              );
              setFilteredRestro(filteredRestro);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 m-2"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      
     
      <div className="flex">
         {items ? items.map((binfo) => (
         <Banner key={binfo.id} bcard={binfo} />
            )) : <h1>Null</h1>}
      </div> 
      


      <div className="flex flex-wrap  p-3">
        {console.log("Body component called",ListOfRestaurants)}
        {filteredRestro.map((restaurant) => (
          <Link className=""
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >

            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>

      {console.log(items)} 
       
    </div>
  );
};
export default Body;
