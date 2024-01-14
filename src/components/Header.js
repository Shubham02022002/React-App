import { useContext, useEffect } from "react";
import { useState } from "react";
import logo from "../../images/burger.png";
import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

export const Title = () => {
  return (
    <>
    <Link to="/">
      <h1 id="heading3" key={"h3"}>
        <img className="h-20 p-2 ml-3 rounded-xl" src={logo}></img>
      </h1>
      </Link>
    </>
  );
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline=useOnline();
  const {user}=useContext(UserContext);
  return (
    <div className="flex mb-2 justify-between shadow-md rounded">    
      <Title />
      <div className="flex">
       
        <NavigationBar />
        <h1 className="flex m-5">{isOnline?"Online":"Offline"}</h1>
        <span className="p-4">{user.name}</span>
        {isLoggedIn ? (
          <button className="flex justify-between mt-4 mr-3"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button className="flex justify-between mt-4 mr-3"
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
