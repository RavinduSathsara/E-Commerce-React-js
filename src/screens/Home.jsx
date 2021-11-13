import React, { useState } from "react";
import Product from "../service/products";

import ShoppingCart from "../components/ShoppingCart";
import SpecialShoppingCart from "../components/SpecialShoppingCart";
import CartBg from "../img/HomeBg.jpg";
import cover from "../img/cover.jpg";

const Home = (props) => {
  const [product, searchProduct] = useState("");
  return (
    <div>
      {/* home Header */}
      <header
        style={{
          backgroundImage: `url(${CartBg}`,

          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-dark py-5 mt-5 "
      >
        <div className="container px-4 px-lg-5 my-5 text-white">
          <div className="text-center bg-image p-5 text-center shadow-1-strong rounded mb-5 ">
            <h2 className="display-4 fw-bolder">
              {" "}
              Are you looking for Best Products !{" "}
            </h2>
            <p className="lead fw-normal text-white-50 mb-0 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              eaque blanditiis aut corporis officia vitae!
            </p>
          </div>
        </div>
      </header>
      {/* body content */}
      <section
        style={{
          backgroundImage: `url(${cover}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="py-5"
      >
        <div className="container">
          {/* Search Box */}
          <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2 col-3 ">
              <input
                onChange={(e) => searchProduct(e.target.value)}
                type="text"
                class="form-control"
                name=""
                id=""
                placeholder="Search product"
              />
            </div>
            <div class="alert alert-primary col-4 m-3 " role="alert">
              {product === "" ? "All products ..." : ` Result for ${product}`}
            </div>
          </form>
        </div>
        <ul>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {Product.map((item) => (
              <ShoppingCart
                itemId={item.id}
                itemName={item.productName}
                description={item.description}
                cost={item.cost}
                stockCount={item.stockCount}
                image={item.image}
              />
            ))}

            {/* <ShoppingCart />
          <SpecialShoppingCart />
          <SpecialShoppingCart /> */}
          </div>
        </ul>
      </section>
    </div>
  );
};

export default Home;
