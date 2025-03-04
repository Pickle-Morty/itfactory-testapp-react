import React from "react";
import Button from "../Button/Button";
import "./ProductItem.css";

const ProductItem = ({ product, className, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };

  return (
    <>
      <div className="relative block rounded-tr-3xl border border-gray-100 bg-white">
        <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
          {product.price} $
        </span>

        <img
          src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-80 w-full rounded-tr-3xl object-cover"
        />

        <div className="p-4 text-center">
          <strong className="text-xl font-medium text-gray-900">
            {" "}
            {product.title}{" "}
          </strong>

          <p className="mt-2 text-pretty text-gray-700">
            {product.description}
          </p>

          <span
            onClick={onAddHandler}
            className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
          >
            Добавить в корзину
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
