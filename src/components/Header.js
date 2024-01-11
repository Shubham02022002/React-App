import { useContext, useEffect } from "react";
import { useState } from "react";
import logo from "../../images/food-village.jpeg";
import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

export const Title = () => {
  return (
    <>
    <Link to="/">
      <h1 id="heading3" key={"h3"}>
        <img className="h-20 p-2 rounded-xl" src={logo}></img>
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
    <div className="flex justify-between bg-sky-300 shadow-xl rounded">    
      <Title />
      <div className="flex">
       
        <NavigationBar />
        <h1 className="flex m-5">{isOnline?"✅":"❌"}</h1>
        <span className="p-10 font-bold text-blue-600">{user.name}</span>
        {isLoggedIn ? (
          <button className="flex justify-between"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
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
