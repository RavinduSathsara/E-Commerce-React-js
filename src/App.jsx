import React from "react";
import AppNavBar from "./components/AppNavBar";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Bg from "./img/bg.jpg";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Bg}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <AppNavBar />
      <div className="container bg-light">
        <Home />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
