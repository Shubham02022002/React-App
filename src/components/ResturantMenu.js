import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import axios from "axios";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
// import { useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
const ResturantMenu = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const addFoodItem =(item   )=>{
    dispatch(addItem(item));
  }
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
  return !resturant ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex">
        <div className="m-2 p-2">
          <h1>Resturant id:{id}</h1>
          <h2>{resturant?.name}</h2>
          <img
            className="h-96 w-96"
            src={IMG_CDN_URL + resturant.cloudinaryImageId}
          ></img>
          <h2>{resturant?.locality}</h2>
          <h2>{resturant?.costForTwoMessage}</h2>
          <h3>{resturant?.cuisines}</h3>
        </div>

        <div>
          <h1 className="font-bold m-1 p-2">Menu</h1>
          {selectedRestrauntMenu?.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name}-
              <button
                className="b-1 p-1 m-1 rounded-md bg-blue-300"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};
export default ResturantMenu;
