import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import { useParams } from "react-router-dom";
const ResturantMenu = () => {
  const { id } = useParams();

  const [resturantInfo, setRestaurantInfo] = useState('');
  useEffect(() => {
    getRestaurantMenu(id);
  }, [id]);

  async function getRestaurantMenu(restaurantId) {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1766701&lng=78.00807449999999&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      // const found=json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.card?.info?.name;
      // console.log(found);
      const restaurantMenu = json?.data?.cards[0]?.card?.card?.info;
      console.log(restaurantMenu);
        setRestaurantInfo(restaurantMenu);
    } catch (error) {
      console.error("There was a problem with the fetch operation");
    }
  }
  return (
    <>
      <h1>Resturant id:{id}</h1>
      <h2>{resturantInfo.name}</h2>
      <img className="resturant-img" src={IMG_CDN_URL+resturantInfo.cloudinaryImageId}></img>
      <h2>{resturantInfo.locality}</h2>
      <h2>{resturantInfo.costForTwoMessage}</h2>
      <h3>{resturantInfo.cuisines}</h3>
    </>
  );
};
export default ResturantMenu;
