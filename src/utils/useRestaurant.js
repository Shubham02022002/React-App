import { useEffect, useState } from "react";

const useRestaurant=(id)=>{
    const [resturant,setRestaurantInfo]=useState(null);
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
          const restaurantMenu = json?.data?.cards[0]?.card?.card?.info;
          console.log(restaurantMenu);
            setRestaurantInfo(restaurantMenu);
        } catch (error) {
          console.error("There was a problem with the fetch operation");
        }
      }
    return resturant; 
}

export default useRestaurant;