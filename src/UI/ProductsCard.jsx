import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ item }) => {
  const { id, product, brand, des, priceAfter, priceBefore } = item;
  return (
    <Link
      key={id}
      to={`/product/${id}`}
      className="nav-link product-link popular-data p-2 mx-1"
    >
      <img src={product} className="w-100 mb-2 mx-auto" alt="" />
      <p className="mb-1 fw-bold text-danger">{brand}</p>
      <div className="price d-flex align-items-center gap-2 mb-2">
        <p className="mb-0">
          <del>${priceAfter}</del>
        </p>
        <p className="mb-0">
          <mark>${priceBefore}</mark>
        </p>
      </div>
      <p className="mb-0 des">{des}</p>
    </Link>
  );
};

export default ProductsCard;
