import React from "react";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { Brand, Navigatable } from "@/components/Common";
import Image from "next/image";

const imageSize = 300;

export const WelcomeComponent: React.FC<{}> = () => {
  return (
    <div className="flex items-center justify-center flex-wrap space-x-10 py-10">
      <div className="flex flex-col">
        <div className="mr-3 flex items-center text-3xl">
          <span className="mr-2 font-semibold">Welcome to</span>
          <Brand size="lg" />
        </div>
        <h2 className="text-2xl font-semibold mb-10">
          We Serve you with happiness.
        </h2>
        <Navigatable
          size="lg"
          text="Order Now"
          icon={faPizzaSlice}
          navigateTo="/"
          textBold
          dark
        />
      </div>
      <Image
        className="w-auto h-auto"
        height={imageSize}
        width={imageSize}
        src="/man.jpg"
        priority
        alt=""
      />
    </div>
  );
};
