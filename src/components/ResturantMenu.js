import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import axios from "axios";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const ResturantMenu = () => {
  const { id } = useParams();
  const resturant = useRestaurant(id);
  const [selectedRestrauntMenu, setselectedRestrauntMenu] = useState(null);
  useEffect(() => {
    const data = axios
      .get(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1766701&lng=78.00807449999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      )
      .then((res) => {
        setselectedRestrauntMenu(
          res.data.data.cards[2]?.groupedCard.cardGroupMap.REGULAR?.cards[1]
            .card.card.itemCards
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(selectedRestrauntMenu);
  return !resturant ? (
    <Shimmer />
  ) : (
    <>
      <div className="m-2 p-2">
        <h1>Resturant id:{id}</h1>
        <h2>{resturant?.name}</h2>
        <img
          className=""
          src={IMG_CDN_URL + resturant.cloudinaryImageId}
        ></img>
        <h2>{resturant?.locality}</h2>
        <h2>{resturant?.costForTwoMessage}</h2>
        <h3>{resturant?.cuisines}</h3>
        <div>
          {selectedRestrauntMenu?.map((item) => {
            return (
              <div className=" border-x-blue-300">
                {item.card.info.name}
              </div>
            );
          })}
        </div>
      </div>
      
    </>
  );
};
export default ResturantMenu;
