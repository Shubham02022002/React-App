import { Link } from "react-router-dom";
const NavigationBar=()=>{
    return(
        <>
        <nav className="nav-links">
            <ul className="flex py-5">
            <li className="px-2"> <Link to="/about">About</Link></li>
            <li className="px-2"><Link to="/cart">Cart</Link></li>
            <li className="px-2"><Link to="/connect">Connect</Link></li>
            <li className="px-2"><Link to="/instamart">InstaMart</Link></li>
            </ul>
        </nav>
        </>
    )
}
export default NavigationBar;