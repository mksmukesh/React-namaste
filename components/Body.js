import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStaus";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);

  const [searchRestro, setSearchRestro] = useState("");
  
  

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
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-txt"
            value={searchRestro}
            onChange={(e) => setSearchRestro(e.target.value)}
          ></input>
          <button
            className="search-btn"
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
          className="filter-btn"
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

      <div className="res-container">
        {console.log("Body component called")}
        {filteredRestro.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {" "}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
