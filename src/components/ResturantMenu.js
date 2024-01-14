import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import axios from "axios";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
const ResturantMenu = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const resturant = useRestaurant(id);
  const [selectedRestrauntMenu, setselectedRestrauntMenu] = useState(null);
  console.log(selectedRestrauntMenu);
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
      <div  className="flex  flex-col items-center">
        <div className="m-2 p-2 w-[60vw] flex justify-evenly">
          {/* <h1>Resturant id:{id}</h1> */}
          <div className="">
            <h2 className="text-2xl">{resturant?.name}</h2>
            <h2>{resturant?.locality}</h2>
            <h2>{resturant?.costForTwoMessage}</h2>
            <h3>{resturant?.cuisines}</h3>
          </div>
          <div className="">
            <img
              className="h-20 w-20 rounded-md"
              src={IMG_CDN_URL + resturant.cloudinaryImageId}
            ></img>
          </div>
        </div>

        <div className="flex w-full flex-col items-center">
          <h1 className="font-bold m-1 p-2">Recommended</h1>
          {selectedRestrauntMenu?.map((item) => (
            <div className="flex  flex-col gap-2 pt-4 pl-4 justify-center w-[30rem] border-2 border-l-0 my-4 border-r-0 border-b-0 border-gray-100" key={item.card.info.id}>
              <div className="flex relative gap-8 w-full">
                <div className="w-[70%] text-lg text-gray-700 font-semibold">{item.card.info.name}</div>
                <div>
                  <img
                    className="w-[5rem] rounded-lg aspect-square"
                    src={IMG_CDN_URL + item.card.info.imageId}
                  ></img>
                </div>
              </div>
              <button
                className=" w-fit  bg-white  h-fit text-sm py-2 px-6 text-center rounded-md shadow-md"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ResturantMenu;
