import React from "react";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "700" });

interface BrandProps {
  size: "sm" | "md" | "lg";
  textOnly?: boolean;
  iconOnly?: boolean;
}

const sizeMap = {
  sm: {
    textSize: "text-xl",
    logoSize: 25,
  },
  md: {
    textSize: "text-2xl",
    logoSize: 40,
  },
  lg: {
    textSize: "text-4xl",
    logoSize: 60,
  },
};

export const Brand: React.FC<BrandProps> = ({ size, iconOnly, textOnly }) => {
  if (iconOnly && textOnly) {
    throw new Error(
      "Cannot use both iconOnly and textOnly props simultaneously, only one of them is allowed at time."
    );
  }

  return (
    <Link href="/" className="text-orange-500 flex items-center">
      {!iconOnly && (
        <span
          className={`${dancingScript.className} ${sizeMap[size].textSize}`}
        >
          Artful Bites Cafe
        </span>
      )}
      {!textOnly && (
        <Image
          className="ml-2"
          src="/latte-art.png"
          width={sizeMap[size].logoSize}
          height={sizeMap[size].logoSize}
          alt=""
        />
      )}
    </Link>
  );
};
