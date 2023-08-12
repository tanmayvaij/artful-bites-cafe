import React from "react";
import { Brand, Navigatable } from "@/components/Common";
import { navbarNavigationData } from "@/data";

export const Navbar: React.FC<{}> = () => {
  return (
    <div className="flex items-center justify-between px-8 py-3">
      <Brand size="md" iconOnly />
      <div className="flex space-x-1">
        {navbarNavigationData.map(({ ...props }, index) => (
          <Navigatable key={index} {...props} size="sm" textBold />
        ))}
      </div>
    </div>
  );
};
