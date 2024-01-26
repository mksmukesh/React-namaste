import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <button className="search-btn" 
          
          >Search</button>
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
        {console.log(ListOfRestaurants)}

        {ListOfRestaurants.length > 0 ? (
          ListOfRestaurants.map((restaurant, index) => (
            <RestaurantCard resData={restaurant} key={index} />
          ))
        ) : (
          <li>Name</li>
        )}
      </div>
    </div>
  );
};
export default Body;
