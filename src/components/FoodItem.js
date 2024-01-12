import { IMG_CDN_URL } from "../config";

const FoodItem=({name,descirption,cloudinaryImageId,price})=>{
    return(
        <div className="w-56 p-2 m-2 shadow-lg bg-blue-300">
            <img src={IMG_CDN_URL+cloudinaryImageId}></img>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{descirption}</h3>
            <h4>Rupee: {price/100}</h4>
        </div>
    )
}
export default FoodItem;