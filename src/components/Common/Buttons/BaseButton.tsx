import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface BaseButtonProps {
  size: "sm" | "lg";
  text?: string;
  icon?: IconDefinition;
  dark?: boolean;
  textBold?: boolean;
  outlined?: boolean;
  elevate?: boolean;
}

const sizeMap = {
  sm: {
    containerSize: "py-2 px-4",
    textSize: "text-sm",
    iconSize: "w-4",
  },
  lg: {
    containerSize: "py-3 px-5",
    textSize: "text-base",
    iconSize: "w-6",
  },
};

const theme = {
  dark: "text-white bg-orange-400 hover:bg-orange-500",
  light: "text-orange-400 hover:bg-orange-400 hover:text-white",
};

export const BaseButton: React.FC<BaseButtonProps> = ({
  size,
  text,
  icon,
  dark,
  textBold,
  outlined,
  elevate,
}) => {
  if (!text && !icon) {
    throw new Error("Either of the text or icon prop should be passed");
  }

  return (
    <div
      className={`
        ${sizeMap[size].containerSize} 
        ${dark ? theme.dark : theme.light} 
        ${outlined && "border-orange-400 border"} 
        ${elevate && "shadow-sm"} 
        inline-flex items-start justify-center rounded-md space-x-2
      `}
    >
      <span
        className={`${sizeMap[size].textSize} ${textBold && "font-semibold"}`}
      >
        {text}
      </span>
      {icon && (
        <FontAwesomeIcon className={sizeMap[size].iconSize} icon={icon} />
      )}
    </div>
  );
};
