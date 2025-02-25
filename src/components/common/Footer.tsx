import { FOOTER_CONTENT_LIST, FOOTER_LINK_LIST, FOOTER_SOCIAL_ICON_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Description from "./Description";

interface FooterLinkItem {
  title: string;
  link: string;
}
interface FooterContentItem {
  title: string;
  description: string;
}

interface SocialIcons{
  icon: any;
  link: string;
}

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="bg-[url(/assets/images/webp/footer-img.webp)] bg-cover bg-no-repeat">
      <div className="max-w-[1172px] px-4 mx-auto pt-[60px]">
        <Link href={"/"} className="max-w-max flex">
          <Image
            height={44}
            width={150}
            src={"/assets/images/webp/logo.webp"}
            alt="logo"
            className="pointer-events-none max-md:h-8 max-md:w-28 max-sm:h-9 max-sm:w-24"
          />
        </Link>
        <ul className="flex max-sm:flex-wrap gap-6 items-center max-sm:gap-0 pt-[31px] max-sm:pt-4">
          {FOOTER_LINK_LIST.map((obj: FooterLinkItem, i: number) => (
            <li key={i}>
              <Link
                href={obj.link}
                className={`max-sm:mr-4 font-semibold text-base max-sm:text-sm leading-6 text-white hover:text-lightSky transition-all duration-300`}
              >
                {obj.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-[30px] max-sm:gap-5 flex-col pt-[30px] max-sm:pt-6">
          {FOOTER_CONTENT_LIST.map((obj: FooterContentItem, i: number) => (
            <div key={i}>
              <p className="font-semibold text-base max-sm:text-sm leading-6 text-white pb-[10px] max-sm:pb-2">
                {obj.title}
              </p>
              <Description text={obj.description} />
            </div>
          ))}
        </div>
        <Description text="Arrow Trade S.A.R.L (Lebanon) is the sole entity authorized to operate the MetaTrader platform under our license. No other companies are involved in the operation or management of our MetaTrader license." />
        <ul className="flex items-center gap-6 max-md:gap-5 max-sm:gap-3 pt-[50px] max-sm:pt-8 pb-20 max-md:pb-12 max-sm:pb-6">
          {FOOTER_SOCIAL_ICON_LIST({ svgClass: "max-md:h-8 max-sm:h-6 transition-all duration-300 hover:scale-90" }).map(
            (obj: SocialIcons, i: number) => (
              <li key={i}>
                <Link href={obj.link} target="blank">
                  {obj.icon}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="w-full h-[1px] bg-white/20"></div>
      <Description
        text={`Copyright © ${year} ArrowTrade. All Rights Reserved.`}
        myClass="mx-auto text-center py-4"
      />
    </div>
  );
};

export default Footer;
