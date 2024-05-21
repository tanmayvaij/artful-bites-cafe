import { FC, JSX } from "react";

export interface BaseButtonProps {
  size: "sm" | "lg";
  text?: string;
  icon?: JSX.Element;
  fill?: boolean;
  textBold?: boolean;
  outlined?: boolean;
  elevated?: boolean;
  invert?: boolean;
}

const sizeMap = {
  sm: {
    containerSize: "py-2 px-4",
    textSize: "text-xs",
  },
  lg: {
    containerSize: "py-3 px-5",
    textSize: "text-sm",
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
  invert,
}) => {
  if (!text && !icon) {
    throw new Error("Either of the text or icon prop should be passed");
  }

  const buttonText = (
    <span
      className={`${sizeMap[size].textSize} ${textBold && "font-semibold"}`}
    >
      {text}
    </span>
  );

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
      {invert ? (
        <>
          {icon}
          {buttonText}
        </>
      ) : (
        <>
          {buttonText}
          {icon}
        </>
      )}
    </div>
  );
};
