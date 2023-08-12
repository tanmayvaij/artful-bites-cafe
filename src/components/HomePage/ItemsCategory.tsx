import React from "react";
import { categoriesData } from "@/data";
import { ItemsCategoryCard } from "./ItemsCategoryCard";

export const ItemsCategory: React.FC<{}> = () => {
  return (
    <div className="flex items-center justify-center flex-col py-10">
      <h2 className="text-2xl font-semibold mb-5">Our Top Categories</h2>
      <div className="flex items-center justify-center flex-wrap">
        {categoriesData.map(({ name, imageLink, icon }, index) => (
          <ItemsCategoryCard
            text={name}
            imageLink={imageLink}
            icon={icon}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
