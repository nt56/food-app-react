// import { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

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

  // useEffect(() => {
  //   // Subscribe to auth state changes
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName } = user;
  //       dispatch(addUser({ uid, email, displayName }));
  //       navigate("/browse");
  //     } else {
  //       dispatch(removeUser());
  //       navigate("/");
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [dispatch, navigate]);

  return (
    <div className="flex justify-between items-center w-full bg-white  shadow-lg">
      <div className="logo-container">
        <Link>
          <img className="w-24 mx-6 mt-2 mb-2" src={LOGO_URL} alt="food-logo" />
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <ul className="flex p-4 m-4 font-bold">
          {/* Link tag help to move one page another without loading the page which mmakes our app fast this is why we can react is single page applications*/}
          <li className="px-4 hover:bg-orange-500 hover:rounded-lg hover:text-white ">
            <Link className="text-lg" to="/browse">
              Home
            </Link>
          </li>
          <li className="px-4 hover:bg-orange-500 hover:rounded-lg hover:text-white">
            <Link className="text-lg" to="/about">
              About
            </Link>
          </li>
          <li className="px-4  hover:bg-orange-500 hover:rounded-lg hover:text-white">
            <Link to="/contact" className="text-lg">
              Contact
            </Link>
          </li>
          <li className="px-4 hover:bg-orange-500 hover:rounded-lg hover:text-white">
            <Link className="text-xl" to="/cart">
              <div className="flex justify-center items-center">
                <IoCartOutline />({cartItems.length})
              </div>
            </Link>
          </li>
          {user ? (
            <li className="px-4 hover:bg-orange-500 hover:rounded-lg hover:text-white">
              <Link to="/">
                <button className="text-lg" onClick={handleLogOut}>
                  Logout
                </button>
              </Link>
            </li>
          ) : (
            <li className="px-4 hover:bg-orange-500 hover:rounded-lg hover:text-white">
              <Link to="/">
                <button className="text-lg">Login/SignUp</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
