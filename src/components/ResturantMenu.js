import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const ResturantMenu = () => {
  const { id } = useParams();
  const resturant=useRestaurant(id);
  
  return !resturant ?(
    <Shimmer/>
  ):(
    <>
    <div>
      <h1>Resturant id:{id}</h1>
      <h2>{resturant?.name}</h2>
      <img className="resturant-img" src={IMG_CDN_URL+resturant.cloudinaryImageId}></img>
      <h2>{resturant?.locality}</h2>
      <h2>{resturant?.costForTwoMessage}</h2>
      <h3>{resturant?.cuisines}</h3>
      </div>
      <div>
       
      </div>
    </>
  );
};
export default ResturantMenu;
