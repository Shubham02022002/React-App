import { IMG_CDN_URL } from "../config";
const ResturantCard = ({ cloudinaryImageId, name, cuisines}) => {
    return (
      <div className="p-2 m-5 w-[200]">
        <img className=""
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
      </div>
    );
  };
export default ResturantCard;  