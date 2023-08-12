import React from "react";
import Link from "next/link";
import { Brand } from "@/components/Common";

export const Footer: React.FC<{}> = () => {
  return (
    <div className="flex items-center justify-between px-10 border p-5">
      <Brand size="sm" />
      <div className="flex items-center space-x-4">
        <Link className="text-xs" href="/terms-of-service">
          Terms of Service
        </Link>
        <Link className="text-xs" href="/privacy-policy">
          Privacy & Policy
        </Link>
      </div>
      <h3 className="text-xs">
        All Rights Reserved by Artful Bites Cafe | {new Date().getFullYear()}
      </h3>
    </div>
  );
};
