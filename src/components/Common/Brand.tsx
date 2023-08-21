import { FC } from "react";
import { Link } from "react-router-dom";

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

export const Brand: FC<BrandProps> = ({ size, iconOnly, textOnly }) => {
  if (iconOnly && textOnly) {
    throw new Error(
      "Cannot use both iconOnly and textOnly props simultaneously, only one of them is allowed at time."
    );
  }

  return (
    <Link to="/" className="text-orange-500 flex items-center">
      {!iconOnly && (
        <span className={`font-dancing-script ${sizeMap[size].textSize}`}>
          Artful Bites Cafe
        </span>
      )}
      {!textOnly && (
        <img
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
