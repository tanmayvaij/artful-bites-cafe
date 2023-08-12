import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import { Navigatable } from "@/components/Common";

const imageSize = 200;

interface ItemsCategoryCardProps {
  imageLink: string;
  text: string;
  icon: IconDefinition;
}

export const ItemsCategoryCard: React.FC<ItemsCategoryCardProps> = ({
  imageLink,
  text,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded-xl m-3"
        src={imageLink}
        width={imageSize}
        height={imageSize}
        alt=""
      />
      <Navigatable text={text} navigateTo="/" size="sm" icon={icon} elevate />
    </div>
  );
};
