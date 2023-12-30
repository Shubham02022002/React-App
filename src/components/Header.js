import { useEffect } from "react";
import { useState } from "react";
import logo from "../../images/food-village.jpeg";

const loggedInUser=()=>{
  return false;
}

export const Title = () => (
    <h1 id="heading3" key={"h3"}>
      <img className="logo" src={logo}></img>
    </h1>
);
const Header = () => {

  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Connect</li>
          <li>Cart</li>
        </ul>
      </div>
     {isLoggedIn?<button onClick={()=>{
      setIsLoggedIn(false)
     }}>Logout</button>:<button onClick={()=>{
      setIsLoggedIn(true)
     }}>Login</button>}
    </div>
  );
};


export default Header;