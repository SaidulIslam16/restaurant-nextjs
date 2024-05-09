import Image from "next/image";
import React from "react";

export default function CartPage() {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* Product Container */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:w-2/3 lg:h-full 2xl:w-1/2 lg:px-10">
        {/* Single Item Contianer */}
        <div className="flex justify-between items-center mb-4">
          <Image src="/temporary/p1.png" alt="" height={100} width={100} />
          <div>
            <h1 className="text-xl uppercase font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$70</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* Single Item Contianer */}
        <div className="flex justify-between items-center mb-4">
          <Image src="/temporary/p1.png" alt="" height={100} width={100} />
          <div>
            <h1 className="text-xl uppercase font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$70</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* Single Item Contianer */}
        <div className="flex justify-between items-center mb-4">
          <Image src="/temporary/p1.png" alt="" height={100} width={100} />
          <div>
            <h1 className="text-xl uppercase font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$70</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* Payment Container */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:w-1/3 lg:h-full 2xl:w-1/2 lg:px-10">
        <div className="flex justify-between text-lg ">
          <span>Subtoal (3 Items)</span>
          <span>$81</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$0</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="text-green-500">FREE</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <span>Total Cost</span>
          <span className="font-bold">$81.90</span>
        </div>
        <button className="bg-red-500 text-white p-2 w-1/2 rounded-md self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
