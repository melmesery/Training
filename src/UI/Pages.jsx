import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/CartSlice";

const Pages = ({ page }) => {
  const { id, product, brand, des, priceAfter, priceBefore } = page;
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        des,
        product,
        priceAfter,
      })
    );
  };
  return (
    <div className="popular-data p-2 mx-1">
      <Link
        key={id}
        to={`/product/${id}`}
        className="nav-link product-link"
      >
        <img src={product} className="w-100 mb-2" alt="product-img" />
        <p className="mb-1 fw-bold text-danger">{brand}</p>
        <div className="price d-flex align-items-center gap-2 mb-2">
          <p className="mb-0">
            <del>${priceAfter}</del>
          </p>
          <p className="mb-0">
            <mark>${priceBefore}</mark>
          </p>
        </div>
        <p className="des">{des}</p>
      </Link>
      <button className="border-0 py-1 px-3" onClick={addToCart}>
        Buy
      </button>
    </div>
  );
};

export default Pages;
