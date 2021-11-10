import React from "react";

const ShoppingCart = () => {
  return (
    <div>
      <div className="col mb-5">
        <div className="card h-100">
          {/* Product image */}
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          {/* Product details */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* Product name */}
              <h5 className="fw-bolder">Fancy Product</h5>
              <div class="d-flex justify-content-center small text-dark mb-2">
                Lorem ipsum dolor, reiciendi
              </div>
              {/* Product price */}
              $80.00
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
      {/*  */}
    </div>
  );
};

export default ShoppingCart;
