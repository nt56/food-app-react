import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartList from "./cartList";
import { EMPTY_CART } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center w-full">
      {/* <h1 className="text-2xl font-bold mt-2 bg-gray-500">Cart</h1> */}

      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && (
          <div>
            <img
              className="w-fit m-auto"
              src={EMPTY_CART}
              alt="empty-cart-img"
            />
            <h1 className="font-bold text-red-500 text-2xl">
              Cart is empty...Please add the Items in The Cart..!
            </h1>
          </div>
        )}
        <CartList items={cartItems} />
      </div>

      <div>
        <button
          className="mt-5 p-2 bg-red-800 text-white rounded-lg w-[30%] font-extrabold"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
