import React from "react";
import { ItemsCategory, WelcomeComponent } from "@/components/HomePage";

const Page: React.FC<{}> = () => {
  return (
    <div>
      <WelcomeComponent />
      <ItemsCategory />
    </div>
  );
};

export default Page;
