import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mt-8 mx-auto p-6 bg-white shadow-2xl rounded-lg">
      {/* Welcome Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 leading-snug">
          Welcome to <br />
          The world of{" "}
          <span className="bg-orange-400 px-2 rounded-lg">
            Tasty & Fresh Food
          </span>
        </h1>
        <h4 className="text-xl mt-2 font-serif text-green-700 italic">
          "You'll feel better when you enjoy a healthy meal at{" "}
          <span className="text-orange-500 font-semibold">FoodFire</span>."
        </h4>
      </div>

      {/* About Section */}
      <div className="mb-6">
        <h2 className="text-[40px] font-extrabold text-orange-500 mb-4">
          About Our Food App
        </h2>
        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-semibold">Food App</span>, your go-to
          platform for exploring delicious meals, browsing menus, and ordering
          your favorite dishes online. Our app is built to provide a seamless
          and enjoyable food ordering experience.
        </p>
      </div>

      {/* Features Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Features</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>🔥 Browse and explore a variety of cuisines</li>
          <li>🛒 Add items to your cart and place orders effortlessly</li>
          <li>👤 User authentication with Firebase</li>
          <li>⚡ Real-time state management using Redux</li>
          <li>🔄 Smooth navigation with React Router</li>
          <li>🎨 Beautiful and responsive UI with Tailwind CSS</li>
        </ul>
      </div>

      {/* Technologies Used */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Technologies Used
        </h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <span>✅ React.js</span>
          <span>✅ Firebase Auth</span>
          <span>✅ Redux Toolkit</span>
          <span>✅ React Router</span>
          <span>✅ Tailwind CSS</span>
          <span>✅ React Hooks</span>
        </div>
      </div>
    </div>
  );
};

export default About;
