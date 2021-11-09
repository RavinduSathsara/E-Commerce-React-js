import React from "react";
import AppNavBar from "./components/AppNavBar";
import Home from "./screens/Home";

const App = () => {
  return (
    <div>
      <AppNavBar />

      <div className="container bg-light">
        <Home />
      </div>
    </div>
  );
};

export default App;
