import { resturantList } from "../config";
import ResturantCard from "./RresturantCard";
import { useEffect, useState } from "react";


function filterData(searchText, resturants) {
  return resturants.filter((resturant) =>
    resturant.info.name.includes(searchText)
  );
}
const Body = () => {
  const [resturants, setResturants] = useState(resturantList);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    getResturants();
  },[]);

  // async function getResturants(){
  //   const data=fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING");
  //   const json= (await data).json();
  //   console.log(json);
  //   setResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  // }
  async function getResturants(){
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      // console.log(json);
      setResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
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
            setResturants(filterData(searchText, resturants));
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
        {resturants.map((resturant) => {
          return <ResturantCard {...resturant.info} key={resturant.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
