import { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  //subscribing the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="flex items-center w-full bg-white shadow-lg px-6">
      <div className="logo-container">
        <Link to="/browse">
          <img className="w-24 mx-6 mt-2 mb-2" src={LOGO_URL} alt="food-logo" />
        </Link>
      </div>

      <div className="flex-1 flex justify-center">
        <ul className="flex justify-center items-center gap-10 p-4 m-4 font-bold">
          {user && (
            <>
              <li className="px-4 hover:text-gray-600">
                <Link className="text-lg" to="/browse">
                  Home
                </Link>
              </li>
              <li className="px-4 hover:text-gray-600">
                <Link className="text-lg" to="/about">
                  About
                </Link>
              </li>
              <li className="px-4 hover:text-gray-600">
                <Link to="/contact" className="text-lg">
                  Contact
                </Link>
              </li>
              <Link to="/cart" className="relative group">
                <div className="relative flex items-center justify-center p-2 rounded-full transition duration-300 group-hover:bg-orange-100">
                  <IoCartOutline className="text-3xl text-gray-800 group-hover:text-orange-500 transition duration-300 transform group-hover:scale-110" />
                </div>
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 animate-pulse">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </>
          )}
        </ul>
      </div>

      {user && (
        <div className="ml-auto flex items-center justify-center gap-2 pr-6 ">
          <p className="pr-8 font-bold text-gray-600">
            Welcome, {user.displayName}
          </p>

          <Link to="/">
            <button
              className="text-xl flex items-center font-semibold hover:text-red-500 transition"
              onClick={handleLogOut}
            >
              <FaSignOutAlt />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
