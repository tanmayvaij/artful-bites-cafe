import { FC } from "react";
import { Brand, Navigatable } from "./";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const userImageSize = 40;

interface NavbarNavigationProps {
  navigateTo: string;
  text?: string;
  icon?: IconDefinition;
}

interface NavbarProps {
  data: Array<NavbarNavigationProps>;
}

export const Navbar: FC<NavbarProps> = ({ data }) => {
  return (
    <div className="fixed w-full bg-white bg-opacity-90 flex items-center justify-between px-8 py-3 shadow-sm ">
      <Brand size="md" iconOnly />
      <div className="flex space-x-1">
        {data.map(({ ...props }, index) => (
          <Navigatable key={index} {...props} size="sm" textBold />
        ))}
      </div>
      <img
        className="rounded-full"
        src="/user.png"
        width={userImageSize}
        height={userImageSize}
        alt=""
      />
    </div>
  );
};
