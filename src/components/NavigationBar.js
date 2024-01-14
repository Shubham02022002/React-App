import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../utils/store";
const NavigationBar=()=>{

    const cartItems=useSelector(store=>store.cart.items);
    return(
        <>
        <nav className="nav-links text-center">
            <ul className="flex py-5">
            <li className="px-2"> <Link to="/about">About</Link></li>
            <li className="px-2"><Link to="/connect">Connect</Link></li>
            <li className="px-2"><Link to="/cart">Cart- {cartItems.length} Items</Link></li>

            </ul>
        </nav>
        </>
    )
}
export default NavigationBar;