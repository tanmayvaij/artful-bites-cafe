import React from "react";
import { BaseButtonProps, BaseButton } from "./BaseButton";

interface ClickableProps extends BaseButtonProps {
  onClick: () => void;
}

export const Clickable: React.FC<ClickableProps> = ({
  onClick,
  ...baseButtonProps
}) => {
  return (
    <button onClick={onClick}>
      <BaseButton {...baseButtonProps} />
    </button>
  );
};
