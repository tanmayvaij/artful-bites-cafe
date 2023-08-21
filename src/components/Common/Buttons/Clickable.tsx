import { FC } from "react";
import { BaseButtonProps, BaseButton } from "./BaseButton";

interface ClickableProps extends BaseButtonProps {
  onClick: () => void;
}

export const Clickable: FC<ClickableProps> = ({
  onClick,
  ...baseButtonProps
}) => {
  return (
    <button onClick={onClick}>
      <BaseButton {...baseButtonProps} />
    </button>
  );
};
