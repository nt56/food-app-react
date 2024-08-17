import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  //subscribing the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center w-full bg-white shadow-xl">
      <div className="logo-container">
        <Link>
          <img className="w-20 mx-6 mt-2 mb-2" src={LOGO_URL} alt="food-logo" />
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <ul className="flex p-4 m-4 font-bold">
          {/* Link tag help to move one page another without loading the page which mmakes our app fast this is why we can react is single page applications*/}
          <li className="px-4 hover:bg-orange-500 hover:rounded-lg hover:text-white ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:bg-orange-500 hover:rounded-lg hover:text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:bg-orange-500 hover:rounded-lg hover:text-white">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 hover:bg-orange-500 hover:rounded-lg hover:text-white">
            <Link to="/cart">
              <div className="flex justify-center items-center">
                <IoCartOutline className="font-bold" />({cartItems.length})
              </div>
            </Link>
          </li>
          <li className="px-4 hover:bg-orange-500 hover:rounded-lg hover:text-white">
            <Link to="/login-signup">
              <button>Login/SignUp</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
