import { FC } from "react";
import { Link } from "react-router-dom";
import { Brand } from ".";

export const Footer: FC<{}> = () => {
  return (
    <div className="flex items-center justify-between px-10 border p-5">
      <Brand size="sm" />
      <div className="flex items-center space-x-4">
        <Link className="text-xs" to="/terms-of-service">
          Terms of Service
        </Link>
        <Link className="text-xs" to="/privacy-policy">
          Privacy & Policy
        </Link>
      </div>
      <h3 className="text-xs">
        All Rights Reserved by Artful Bites Cafe | {new Date().getFullYear()}
      </h3>
    </div>
  );
};
