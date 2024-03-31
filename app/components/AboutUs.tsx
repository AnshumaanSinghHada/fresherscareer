import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "react-feather";
import Link from "next/link";

export const AboutUs = () => {
  return (
    <div className="flex flex-col items-center container mx-auto max-w-96 mt-10 mb-12">
      <div id="Company_Logo" className="p-3">
        <Image
          src={"/static/logo.jpg"}
          alt="company logo"
          height={200}
          width={200}
          className="shadow-md hover:shadow-sm rounded-full"
        />
      </div>
      <div id="Company_Name" className="p-2">
        <h1 className="text-3xl text-black font-semibold ">@fresherscareer</h1>
      </div>
      <div id="Company_Info">
        <h2 className="text-sm text-center text-black">
          100% Verified Jobs
        </h2>
      </div>
      <div id="Company_Social">
        <Link href="www.youtube.com/@fresherscareerofficial">
          <div id="Social_Media_Logos" className="px-5 mx-auto flex bg-red-500 text-white hover:shadow-zinc-500 hover:shadow-md shadow-md rounded-3xl p-1 items-center m-7 w-full">
            Subscribe to our Youtube
            <Youtube className="m-2 p-1 w-10 h-10" />
            {/* <Facebook className="shadow-md hover:shadow-2xl rounded- m-2 p-2 w-10 h-10" />
          <Instagram className="shadow-md hover:shadow-2xl rounded- m-2 p-2 w-10 h-10" /> */}
          </div>
        </Link>
      </div>
    </div>
  );
};
