import React from "react";
import { useState } from "react";

import AppNavBar from "./components/AppNavBar";
import Footer from "./components/Footer";
import Home from "./screens/Home";

import AppCart from "./screens/AppCart";

const App = () => {
  const [view, setview] = useState(null);
  function setShowHome() {
    setview(null);
  }
  function setShowCart() {
    setview("Cart");
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <AppNavBar setShowHome={setShowHome} setShowCart={setShowCart} />
      <div className="container bg-light">
        {view === null ? <Home /> : view === "Cart" ? <AppCart /> : <Home />}
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
