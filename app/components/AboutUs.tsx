import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "react-feather";

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
        <div id="Social_Media_Logos" className="flex text-black p-2">
          <Youtube className="shadow-md hover:shadow-2xl rounded- m-2 p-2 w-10 h-10" />
          <Facebook className="shadow-md hover:shadow-2xl rounded- m-2 p-2 w-10 h-10" />
          <Instagram className="shadow-md hover:shadow-2xl rounded- m-2 p-2 w-10 h-10" />
        </div>
      </div>
    </div>
  );
};
