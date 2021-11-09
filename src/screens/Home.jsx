import React from "react";
import ShoppingCart from "../components/ShoppingCart";
import SpecialShoppingCart from "../components/SpecialShoppingCart";

const Home = () => {
  return (
    <div>
      {/* home Header */}
      <header className="bg-dark py-5 mt-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h2 className="display-4 fw-bolder">
              {" "}
              Are you looking for Best Products !{" "}
            </h2>
            <p className="lead fw-normal text-white-50 mb-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              eaque blanditiis aut corporis officia vitae!
            </p>
          </div>
        </div>
      </header>
      {/* body content */}
      <section className="py-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <ShoppingCart />
          <SpecialShoppingCart />
        </div>
      </section>
    </div>
  );
};

export default Home;
