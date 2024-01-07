import { useEffect } from "react";
import { useState } from "react";
import logo from "../../images/food-village.jpeg";
import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

export const Title = () => {
  return (
    <>
    <Link to="/">
      <h1 id="heading3" key={"h3"}>
        <img className="logo" src={logo}></img>
      </h1>
      </Link>
    </>
  );
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline=useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
       
        <NavigationBar />
        <h1>{isOnline?"✅ONLINE":"❌OFFLINE"}</h1>
        {isLoggedIn ? (
          <button
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
