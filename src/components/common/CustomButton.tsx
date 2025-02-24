import React from "react";
interface CustomButtonItem {
  myClass?: string;
  text: string;
}
const CustomButton = ({ myClass, text }: CustomButtonItem) => {
  return (
    <button className={`${myClass} font-semibold text-base leading-[19.36px] text-nowrap transition-all duration-300 border`}>{text}</button>
  );
};

export default CustomButton;
