import React from "react";
import AppNavBar from "./components/AppNavBar";
import Footer from "./components/Footer";
import Home from "./screens/Home";

const App = () => {
  return (
    <div>
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
