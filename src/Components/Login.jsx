import React, { useState } from "react";

const Login = () => {
  const [togglesignIn, setTogglesignIn] = useState(false);

  const click = () => {
    setTogglesignIn(!togglesignIn);
  };

  return (
    <div className="bg-black bg-opacity-80 p-10 rounded-md w-[400px] text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">
        {togglesignIn ? "Sign In" : "Sign Up"}
      </h2>
      <form className="flex flex-col">
        {togglesignIn ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Username"
            className="p-3 mb-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}
        <input
          type="email"
          placeholder="Email or phone number"
          className="p-3 mb-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 mb-6 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-bold"
          onClick={click}
        >
          {togglesignIn ? "Sign In" : "Sign Up"}
        </button>
      </form>
      <div className="flex justify-between text-gray-400 text-sm mt-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <a href="#" className="hover:underline">
          Need help?
        </a>
      </div>
      <p className="text-gray-400 mt-6 text-center">
        {togglesignIn ? "New to Netflix? " : "Already have account "}
        <a href="#" className="text-white hover:underline">
          {togglesignIn ? "Sign up now" : "Log in now"}
        </a>
      </p>
    </div>
  );
};

export default Login;
