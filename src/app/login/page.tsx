import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <div className="h-full md:h-[70%] w-full shadow-lg rounded-md flex flex-col md:flex-row lg:w-[60%]">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        {/* FORM CONTAINER */}
        <div className="p-8 flex flex-col gap-5 md:w-1/2">
          <h1 className="uppercase text-2xl font-bold xl:text-4xl">Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, illo?
          </p>
          {/* Google Login Button */}
          <button className="ring-1 ring-gray-300 p-4 flex gap-2 items-center text-lg rounded-md">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          {/* Facebook Login Button */}
          <button className="ring-1 ring-gray-300 p-4 flex gap-2 items-center text-lg rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a Problem{" "}
            <Link className="underline" href="/">
              Contact us
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
