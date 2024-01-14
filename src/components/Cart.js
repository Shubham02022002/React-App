import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="font-bold min-h-[80vh] text 3xl">
      <h1 className="text-2xl">Cart items {cartItems.lenght}</h1>
      <button className=" shadow-md p-2 m-3" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
      <div className="flex flex-wrap justify-evenly items-center">
        {cartItems.map((items) => (
          <FoodItem
            name={items.card.info.name}
            descirption={items.card.info.descirption}
            cloudinaryImageId={items.card.info.imageId}
            price={items.card.info.price}
            key={items.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Cart;
