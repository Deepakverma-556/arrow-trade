import { FOOTER_CONTENT_LIST, FOOTER_LINK_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Description from "./Description";

const Footer = () => {
  return (
    <div className="bg-[url(/assets/images/webp/footer-img.webp)] bg-cover bg-no-repeat">
      <div className="max-w-[1172px] px-4 mx-auto pt-[60px]">
        <Link href={"/"}>
          <Image
            height={44}
            width={150}
            src={"/assets/images/webp/logo.webp"}
            alt="logo"
            className="pointer-events-none max-md:h-8 max-md:w-28 max-sm:h-6 max-sm:w-20"
          />
        </Link>
        <ul className="flex items-center gap-6 pt-[31px]">
          {FOOTER_LINK_LIST.map((obj, i) => (
            <li key={i}>
              <Link
                href={obj.link}
                className="font-semibold text-base leading-6 text-white hover:text-lightSky transition-all duration-300"
              >
                {obj.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-[30px] flex-col pt-[30px]">
          {FOOTER_CONTENT_LIST.map((obj, i) => (
            <div key={i}>
              <p className="font-semibold text-base leading-6 text-white pb-[10px]">
                {obj.title}
              </p>
              <Description text={obj.description} />
            </div>
          ))}
        </div>
        <Description text="Arrow Trade S.A.R.L (Lebanon) is the sole entity authorized to operate the MetaTrader platform under our license. No other companies are involved in the operation or management of our MetaTrader license." />
      </div>
    </div>
  );
};

export default Footer;
