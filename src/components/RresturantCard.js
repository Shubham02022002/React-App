import { IMG_CDN_URL } from "../config";
const ResturantCard = ({ cloudinaryImageId, name, cuisines}) => {
    return (
      <div className="card">
        <img 
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
        ></img>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
      </div>
    );
  };
export default ResturantCard;  