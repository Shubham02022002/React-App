import logo from "../../images/food-village.jpeg";

export const Title = () => (
    <h1 id="heading3" key={"h3"}>
      <img className="logo" src={logo}></img>
    </h1>
);
const Header = () => {
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
    </div>
  );
};


export default Header;