import { menu } from "@/data";
import Link from "next/link";
import React from "react";

export default function MenuPage() {
  return (
    <div className="p-4 md:px-10 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-5 md:h-2/3 flex items-center"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-xl">{category.title}</h1>
            <p className="text-sm my-3">{category.desc}</p>
            <button
              className={`hidden xl:block bg-${category.color} text-${
                category.color === "black" ? "white" : "red-500"
              } py-2 px-5 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
