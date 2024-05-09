import React from "react";

export default function OrderPage() {
  return (
    <div className="p-4 md:px-10">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order Id</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {/* Put your dynamic Contents here */}
          <tr className="text-sm md:text-base bg-red-100">
            <td className="hidden md:block py-4 px-2">1133</td>
            <td className="py-4 px-2">9.05.2024</td>
            <td className="py-4 px-2">$79.99</td>
            <td className="hidden md:block py-4 px-2">Pizza (2) Burger (3)</td>
            <td className="py-4 px-2 text-red-500 font-bold">12 Minute Away</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-4 px-2">1133</td>
            <td className="py-4 px-2">9.05.2024</td>
            <td className="py-4 px-2">$79.99</td>
            <td className="hidden md:block py-4 px-2">Pizza (2) Burger (3)</td>
            <td className="py-4 px-2 text-green-500 font-semibold">
              Delivered
            </td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100 ">
            <td className="hidden md:block py-4 px-2">1133</td>
            <td className="py-4 px-2">9.05.2024</td>
            <td className="py-4 px-2">$79.99</td>
            <td className="hidden md:block py-4 px-2">Pizza (2) Burger (3)</td>
            <td className="py-4 px-2 text-green-500 font-semibold">
              Delivered
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
