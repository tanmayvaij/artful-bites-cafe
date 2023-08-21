import { FC } from "react";
import { BaseButtonProps, BaseButton } from "./BaseButton";
import { Link } from "react-router-dom";

interface NavigatableProps extends BaseButtonProps {
  navigateTo: string;
}

export const Navigatable: FC<NavigatableProps> = ({
  navigateTo,
  ...baseButtonProps
}) => {
  return (
    <Link to={navigateTo}>
      <BaseButton {...baseButtonProps} />
    </Link>
  );
};
