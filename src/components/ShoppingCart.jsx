import React from "react";
import { useState } from "react";

const ShoppingCart = (props) => {
  const [count, setCount] = useState(0);
  function addCountToNav() {
    setCount(count + 1);
  }
  function removeCountCart() {
    setCount(count - 1);
  }

  return (
    <div>
      <div className="col m-2 mt-3" onClick={() => alert(props.itemName)}>
        <div className="card h-100  ">
          {/* count badge- */}
          <div
            className="badge bg-dark text-warning position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
            // style="top: 0.5rem; right: 0.5rem"
          >
            {props.stockCount + count <= 0 ? "Sold Out" : ""}
          </div>
          {/* Product image */}
          <img
            onClick={() => alert(props.itemName)}
            style={{ width: `100%`, height: `25vh` }}
            className="card-img-top "
            src={props.image}
            alt="..."
          />
          {/* Product details */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* Product name */}
              <h5 className="fw-bolder">{props.itemName}</h5>
              <div className="d-flex justify-content-center small text-dark mb-2">
                {props.description}
              </div>
              {/* Product price */}
              {props.cost}
            </div>
          </div>
          {/* Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a
                onClick={removeCountCart}
                className="btn btn-outline-dark mt-auto"
                // href="#"
              >
                <i className="bi bi-cart-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
