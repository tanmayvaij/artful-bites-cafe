import React from "react";
import Link from "next/link";
import { BaseButtonProps, BaseButton } from "./BaseButton";

interface NavigatableProps extends BaseButtonProps {
  navigateTo: string;
}

export const Navigatable: React.FC<NavigatableProps> = ({
  navigateTo,
  ...baseButtonProps
}) => {
  return (
    <Link href={navigateTo}>
      <BaseButton {...baseButtonProps} />
    </Link>
  );
};
