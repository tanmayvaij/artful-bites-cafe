import { FC } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface BaseButtonProps {
  size: "sm" | "lg";
  text?: string;
  icon?: IconDefinition;
  fill?: boolean;
  textBold?: boolean;
  outlined?: boolean;
  elevated?: boolean;
}

const sizeMap = {
  sm: {
    containerSize: "py-2 px-4",
    textSize: "text-xs",
    iconSize: "w-4",
  },
  lg: {
    containerSize: "py-3 px-5",
    textSize: "text-sm",
    iconSize: "w-5",
  },
};

export const BaseButton: FC<BaseButtonProps> = ({
  size,
  text,
  icon,
  fill,
  textBold,
  outlined,
  elevated,
}) => {
  if (!text && !icon) {
    throw new Error("Either of the text or icon prop should be passed");
  }

  return (
    <div
      className={`
        ${sizeMap[size].containerSize} 
        ${
          fill
            ? "text-white bg-orange-400 shadow-orange-400/20 hover:bg-orange-500 hover:shadow-orange-400/50"
            : "text-orange-400 hover:bg-orange-400 hover:text-white"
        } 
        ${outlined ? "border-orange-400 border" : ""} 
        ${elevated ? "shadow-md" : ""}
        inline-flex items-center fill:bg-red-400 justify-center rounded-full space-x-2
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
