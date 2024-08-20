import React, { useState } from "react";
import user_icon from "../components/Assets/person.png";
import email_icon from "../components/Assets/email.png";
import password_icon from "../components/Assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container flex w-[600px] h-fit flex-col m-auto mt-24 bg-white pb-7">
      <div className="header flex flex-col items-center gap-2 w-[100%]">
        <div className="text text-black text-[48px] font-[700]">{action}</div>
      </div>

      <div className="inputs m-14 flex flex-col gap-6">
        {action === "Sign In" ? (
          <div></div>
        ) : (
          <div className="input flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-md">
            <img
              src={user_icon}
              alt="user-icon"
              className="my-[0px] mx-[30px]"
            />
            <input
              type="text"
              placeholder="Name"
              className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[#797979] font-[19px]"
            />
          </div>
        )}
        <div className="input flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-md">
          <img
            src={email_icon}
            alt="email-icon"
            className="my-[0px] mx-[30px]"
          />
          <input
            type="email"
            placeholder="Email ID"
            className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[#797979] font-[19px]"
          />
        </div>
        <div className="input flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-md">
          <img
            src={password_icon}
            alt="password-icon"
            className="my-[0px] mx-[30px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[#797979] font-[19px]"
          />
        </div>
      </div>

      <div className="submit-container flex gap-7 my-[10px] mx-auto">
        <div
          className={action === "Sign In" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign In");
          }}
        >
          Sign In
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
