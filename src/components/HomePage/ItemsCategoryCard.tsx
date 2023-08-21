import { FC } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Navigatable } from "../Common";

const imageSize = 200;

interface ItemsCategoryCardProps {
  imageLink: string;
  text: string;
  icon: IconDefinition;
}

export const ItemsCategoryCard: FC<ItemsCategoryCardProps> = ({
  imageLink,
  text,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="rounded-xl m-3"
        src={imageLink}
        width={imageSize}
        height={imageSize}
      />
      <Navigatable text={text} navigateTo="/" size="sm" icon={icon} elevated />
    </div>
  );
};
