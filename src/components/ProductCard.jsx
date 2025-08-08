import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function ProductCard({ product, addProduct, onClick, options }) {
  const isOutOfStock = product.quantity === 0;

  return (
    <div
      className="card text-center h-100 shadow rounded-4"
      key={product.id}
      onClick={onClick ? () => onClick(product.id) : undefined}
    >
      <img
        className="card-img-top p-3 object-fit-contain"
        src={product.image}
        alt="Card"
        height={300}
      />
      <div className="card-body text-start">
        <h4
          className="card-title text-truncate"
          title={product.title}
          style={{ cursor: "help" }}
        >
          {product.title}
        </h4>
        <h5 className="card-subtitle mb-2 text-muted">${product.price}</h5>
        <p
          className="card-text"
          title={product.description}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            cursor: "help",
          }}
        >
          {product.description}
        </p>
        {options && options}
        <div className="d-flex justify-content-end">
          {isOutOfStock ? (
            <span className="badge rounded-pill bg-danger bg-opacity-50">
              Out of Stock
            </span>
          ) : (
            <>
              <Link
                to={"/product/" + product.id}
                className="btn btn-outline-dark btn-sm m-1 rounded-pill"
              >
                Buy Now
              </Link>
              <button
                className="btn btn-dark btn-sm m-1 rounded-pill"
                onClick={() => {
                  toast.success("Added to cart");
                  addProduct(product);
                }}
              >
                Add to Cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
