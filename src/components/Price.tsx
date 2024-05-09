"use client";

import React, { useEffect, useState } from "react";

export default function Price({ price, id, options }) {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">${total.toFixed(2)}</h2>
      {/* Option Container */}
      <div className="flex gap-4">
        {options.map((option, index) => (
          <button
            key={option.title}
            className="ring-1 ring-red-500 px-3 py-1 rounded-md"
            style={{
              background: selected === index ? "rgb(239 68 68)" : "white",
              color: selected === index ? "white" : "rgb(239 68 68)",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* Quantity Container */}
      <div className="flex justify-between items-center">
        {/* Quantity */}
        <div className="flex justify-between w-full p-2 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-2 items-center justify-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >{`<`}</button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
            >{`>`}</button>
          </div>
        </div>
        {/* Cart Button */}
        <div>
          <button className="bg-red-500 p-2 text-white uppercase w-36 ring-1 ring-red-500 ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
