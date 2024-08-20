import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartList = ({ items }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    //dispatch an action
    dispatch(removeItem(item?.card?.info?.id));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className=" border-b-2 p-2 m-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <h4 className="font-semibold pb-2">{item?.card?.info?.name}</h4>
            <h4 className="pb-2">
              ₹{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
              /-
            </h4>
            <p className="text-xs">{item?.card?.info?.description}</p>
            <button
              className="p-2 mt-5 rounded-lg bg-black shadow-lg w-[50%] text-white font-bold"
              onClick={() => handleRemoveItem(item)}
            >
              Remove
            </button>
          </div>

          <div className="w-3/12 p-4">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
