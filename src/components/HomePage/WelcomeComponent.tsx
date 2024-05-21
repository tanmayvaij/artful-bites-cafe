import { FC } from "react";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { Brand, Navigatable } from "../Common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const imageSize = 300;

export const WelcomeComponent: FC<{}> = () => {
  return (
    <div className="flex items-center justify-center flex-wrap space-x-10 py-12">
      <div className="flex flex-col">
        <div className="mr-3 flex items-center text-3xl">
          <span className="mr-2 font-semibold">Welcome to</span>
          <Brand size="lg" />
        </div>
        <h2 className="text-2xl font-semibold mb-10">
          We serve you with happiness.
        </h2>
        <Navigatable
          size="lg"
          text="Order Now"
          icon={<FontAwesomeIcon icon={faPizzaSlice} />}
          navigateTo="/"
          textBold
          fill
          elevated
        />
      </div>
      <img height={imageSize} width={imageSize} src="/man.jpg" />
    </div>
  );
};
