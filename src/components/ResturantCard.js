import { IMG_CDN_URL } from "../config";
const ResturantCard = ({ cloudinaryImageId, name, cuisines }) => {
  return (
    <div className="p-2 m-5 w-[150] flex flex-col items-center">
      <img className="w-[100px] h-[100px]" src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

// export const MenuImg = ({ cloudinaryImageId }) => {
//   return (
//     <>
//       <img src={IMG_CDN_URL + cloudinaryImageId}></img>
//     </>
//   );
//};
export default ResturantCard;
