import React from "react";
interface CustomButtonItem {
  myClass?: string;
  text: string;
  customOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const CustomButton = ({ myClass, text,customOnClick }: CustomButtonItem) => {
  return (
    <button onClick={customOnClick} className={`${myClass} font-semibold text-base leading-[19.36px] max-md:text-sm max-md:px-5 max-md:py-2 text-nowrap transition-all duration-300 border`}>{text}</button>
  );
};

export default CustomButton;
