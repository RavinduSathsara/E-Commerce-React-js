import React from "react";

const ShoppingCart = (props) => {
  return (
    <div>
      <div className="col m-2 mt-3">
        <div className="card h-100  ">
          {/* count badge- */}
          <div
            class="badge bg-dark text-warning position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
            // style="top: 0.5rem; right: 0.5rem"
          >
            {props.stockCount}
          </div>
          {/* Product image */}
          <img
            style={{ width: `100%`, height: `30vh` }}
            className="card-img-top "
            src={props.image}
            alt="..."
          />
          {/* Product details */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* Product name */}
              <h5 className="fw-bolder">{props.itemName}</h5>
              <div class="d-flex justify-content-center small text-dark mb-2">
                {props.description}
              </div>
              {/* Product price */}
              {props.cost}
            </div>
          </div>
          {/* Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                <i class="bi bi-cart-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
