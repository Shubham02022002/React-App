import { Link } from "react-router-dom";
const NavigationBar=()=>{
    return(
        <>
        <nav className="nav-links">
            <ul>
            <li> <Link to="/about">About</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/connect">Connect</Link></li>
            <li><Link to="/instamart">InstaMart</Link></li>
            </ul>
        </nav>
        </>
    )
}
export default NavigationBar;