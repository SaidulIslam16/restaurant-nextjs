import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryPage() {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 sm:w-1/2 lg:w-1/3 border-red-500 p-4 flex flex-col justify-between group even:bg-fuchsia-50"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* Image Container */}
          <div className="relative h-[80%]">
            {item.img && (
              <Image src={item.img} alt="" fill className="object-contain" />
            )}
          </div>
          {/* Text Container */}
          <div className="flex items-center justify-between">
            <h1 className="text-xl uppercase font-bold">{item.title}</h1>
            <h2 className="text-xl group-hover:hidden">${item.price}</h2>
            <button className="uppercase text-sm hidden group-hover:block bg-red-500 p-1 rounded-md text-white">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
