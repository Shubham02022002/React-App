import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch=useDispatch();
  const handleClearCart=()=>{
    dispatch(clearCart())
  }
  return (
    <div className="font-bold text 3xl">
      <h1>cart items-{cartItems.lenght}</h1>
      <button className="bg-blue-300 p-2 m-3" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
        <div className="flex">
        {cartItems.map((items) => (
          <FoodItem key={items.id} {...items} />
        ))}
      </div>
      
    </div>
  );
};
export default Cart;
