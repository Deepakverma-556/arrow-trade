import { HEADER_LIST, TRADE_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import CustomButton from "./CustomButton";

interface TradeItem {
  title: string;
  stock: string;
}

interface HeaderItem {
  title: string;
  link?: string;
  subtitleOne?: string;
  subtitleTwo?: string;
}
const Header = () => {
  return (
    <>
      <div className="bg-lightSky max-w-[1440px] mx-auto py-[18px]">
        <Marquee direction="left" pauseOnHover={true}>
          <div className=" flex items-center gap-[60px]">
            {TRADE_LIST.map(function (item: TradeItem, i: number) {
              return (
                <div
                  key={i}
                  className={`flex items-center gap-[6px] ${
                    i === 0 ? "pl-14" : ""
                  }`}
                >
                  <p className="text-base leading-[19.36px] text-black">
                    {item.title}
                  </p>
                  <div className="bg-customGray py-1 pl-[11px] pr-[7px] rounded-full flex items-center gap-[6px]">
                    <p className="text-base leading-[19.36px] text-white">
                      {item.stock}
                    </p>
                    <span
                      className={`${
                        i === 2 ? "bg-customRed" : "bg-customGreen"
                      } h-[10px] w-[10px] rounded-full`}
                    ></span>
                  </div>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
      <div className="max-w-[1220px] mx-auto pt-[21px] pb-5 pl-[88px] pr-10 flex items-center justify-between rounded-full border border-white/15 bg-white/10">
        <Link href={"/"}>
          <Image
            height={44}
            width={150}
            src={"/assets/images/webp/logo.webp"}
            alt="logo" className="pointer-events-none"
          />
        </Link>
        <ul className="flex items-center gap-6">
          {HEADER_LIST.map((obj:HeaderItem, i:number) => (
            <div>
              {i === 2 ? (
                <select className="bg-transparent text-white/70 cursor-pointer custom-select outline-none">
                          <option value={obj.title}>{ obj.title}</option>
                          <option value={obj.subtitleOne}>{obj.subtitleOne}</option>
                          <option value={obj.subtitleTwo}>{obj.subtitleTwo}</option>
                </select>
              ) : (
                <li>
                  <Link className="text-base hover:text-lightSky transition-all duration-300 leading-[19.36px] text-white/70" href={obj.link}>{obj.title}</Link>
                </li>
              )}
            </div>
          ))}
              </ul>
              <div>
                  <CustomButton text="Sign Up" myClass="border-lightSky rounded-[72px] !text-lightSky px-4 py-4"/>
                  <CustomButton text="Login"/>
              </div>
      </div>
    </>
  );
};

export default Header;
