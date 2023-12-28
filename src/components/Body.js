import { resturantList } from "../config";
import ResturantCard from "./RresturantCard";
import { useState } from "react";

function filterData(searchText, resturants) {
  return resturants.filter((resturant) =>
    resturant.info.name.includes(searchText)
  );
}
const Body = () => {
  const [resturants, setResturants] = useState(resturantList);
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="search-container">
        <input
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
