// import { resturantList } from "../config";
import ResturantCard from "./RresturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurantsData) {
  return restaurantsData.filter((resturant) =>
    resturant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [loading,setLoading]=useState(true);
  const [allResturants,setAllResturants]=useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      const restaurantsData =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setAllResturants(restaurantsData);
      setFilteredResturants(restaurantsData);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }finally{
      setLoading(false);
    }
  }

  if(loading)return(
    <>
     <Shimmer/>
    </>
  )
 

  if(filteredResturants.length===0&&searchText!=''){
    return(
      <h1>No Restuarnt Found</h1>
    )
  }
  

  return(
    <>
      <div className="search-container">
        <input
          id="search-field"
          className="search-input"
          type="text"
          placeholder="Serach"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            setFilteredResturants(filterData(searchText, allResturants));
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
        
        {filteredResturants.map((resturant) => {
          return (
            <ResturantCard
              {...resturant.info}
              key={
                resturant.info.id
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
