import React from "react";

const About = () => {
  return (
    <div className="flex flex-wrap m-7 items-center justify-around gap-5">
      <div className="flex flex-wrap flex-col justify-start items-start overflow-y-hidden">
        <h1 className="text-[50px] text-gray-800 font-bold">
          Welcome to <br /> The world of <br />
          <span className="bg-orange-400 px-2 rounded-lg">
            Tasty & Fresh Food
          </span>
        </h1>
        <h4 className="text-[25px]  mt-2 font-serif text-green-700">
          "Better you will feel if you eat a Food<span>Fire</span> healthy meal"
        </h4>
      </div>

      <div className="flex flex-wrap flex-col justify-center items-center">
        <img
          src="https://png.pngtree.com/png-vector/20200417/ourmid/pngtree-order-food-online-via-the-mobile-application-png-image_2180626.jpg"
          alt="food image"
          className="rounded-lg w-[500px]"
        />
      </div>
    </div>
  );
};

export default About;
