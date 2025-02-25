import React from "react";

interface HeadingItems {
  myClass?: string;
  text: string;
  spanText: string;
}
const Heading = ({ myClass, text, spanText }: HeadingItems) => {
  return (
    <p className={`${myClass} text-5xl leading-[58.9px] text-white`}>
      {text} <span className="text-lightSky font-semibold">{spanText}</span>
    </p>
  );
};

export default Heading;
