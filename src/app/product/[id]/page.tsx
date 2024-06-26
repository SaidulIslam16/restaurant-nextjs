import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

export default function ProductPage() {
  return (
    <div className="p-4 md:px-10 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 items-center">
      {/* Image Container */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* Text Container Container */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] justify-center md:gap-6 lg:gap-8">
        <h1 className="text-xl md:text-3xl uppercase font-bold">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
}
