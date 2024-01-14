import { IMG_CDN_URL } from "../config";

const FoodItem = ({ name, descirption, cloudinaryImageId, price }) => {
  return (
    <div className="w-[14rem] flex-col h-[25rem] p-2 m-2 shadow-lg ">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <div className="flex flex-col px-[6px]">
        <h2 className="font-bold mt-4 text-lg">{name}</h2>
        <h3>{descirption}</h3>
        <h4>Rupee: {price / 100}</h4>
      </div>
    </div>
  );
};
export default FoodItem;
