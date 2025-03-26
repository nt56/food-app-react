import React, { useState, useRef } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { checkValidData } from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginSignup = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [password, setPassword] = useState(true);

  const name = useRef(null);
  const email = useRef(null);
  const Password = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggelSignInFrom = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleHideShow = () => {
    setPassword(!password);
  };

  //Sign In or Sign Up Operation Logic
  const handleButtonClick = () => {
    //form data validation
    const message = checkValidData(email.current.value, Password.current.value);
    toast.error(message);
    if (message) return; //if it has error then it return don't go ahead

    if (!isSignInForm) {
      //Sign Up Logic - as soon as user signin we immediately update the photo url
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated! and add user info again here
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              toast.success("Registration Successful...!");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              toast.error(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorCode + " - " + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(
            addUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
            })
          );
          toast.success("Login Successful...!");
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="w-screen">
      <form
        className="w-full md:w-3/12  p-12 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            required
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          required
          className="p-4 my-4 w-full bg-gray-700"
        />
        <div className="flex justify-between items-center w-full bg-gray-700 my-4 relative">
          <input
            ref={Password}
            type={password ? "password" : "text"}
            placeholder="Password"
            required
            className="p-4 h-fit w-full bg-gray-700"
          />
          <div
            className="cursor-pointer absolute ml-[22rem] text-xl"
            onClick={handleHideShow}
          >
            {password ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer font-bold" onClick={toggelSignInFrom}>
          {isSignInForm
            ? "New User? Sign Up Now"
            : "Already Registerd? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default LoginSignup;
