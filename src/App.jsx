import React from "react";
import Header from "./Components/Header";
import Login from "./Components/Login";

const App = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
          alt="Netflix Background"
        />
      </div>

      {/* Overlay (dark gradient for readability) */}
      <div className="absolute inset-0 bg-opacity-60"></div>
      <Header />
      <div className="relative z-10 flex justify-center items-center p-40">
        <Login />
      </div>
    </div>
  );
};

export default App;
