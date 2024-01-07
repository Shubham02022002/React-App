// import { resturantList } from "../config";
import ResturantCard from "./RresturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";



const Body = () => {
  const [loading, setLoading] = useState(true);
  const [allResturants, setAllResturants] = useState([]);
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
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants
  
      setAllResturants(restaurantsData);
      setFilteredResturants(restaurantsData)
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setLoading(false);
    }
  }
  const isOnline=useOnline();
  if(!isOnline){
    return(
      <h1>You are offilen</h1>
    )
  }
  if (loading)
    return (
      <>
        <Shimmer />
      </>
    );

  if (filteredResturants?.length === 0 && searchText != "") {
    return <h1>No Restuarnt Found</h1>;
  }

  return (
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
        {filteredResturants?.map((resturant) => {
          return (
            <Link
              to={"/resturant/" + resturant.info.id}
              key={resturant.info.id}
            >
              <ResturantCard {...resturant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
