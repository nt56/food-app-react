import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center w-full">
      <h1 className="text-2xl font-bold mt-5">Cart Page</h1>

      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && (
          <h1 className="mt-5">
            Cart is empty...Please add the Items in The Cart
          </h1>
        )}
        <ItemList items={cartItems} />

        <button
          className="mt-5 p-2 bg-black text-white rounded-lg w-[30%]"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
