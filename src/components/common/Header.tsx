import { HEADER_LIST, TRADE_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  return (
    <>
      <div className="bg-lightSky w-full mx-auto py-[18px] max-md:py-3 max-sm:py-2">
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
                  <p className="text-base max-md:text-sm max-sm:text-xs leading-[19.36px] text-black">
                    {item.title}
                  </p>
                  <div className="bg-customGray py-1 pl-[11px] pr-[7px] rounded-full flex items-center gap-[6px]">
                    <p className="text-base max-md:text-sm max-sm:text-xs leading-[19.36px] text-white">
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
      <div className="max-w-[1220px] z-20 xl:backdrop-blur-xl relative mx-auto max-lg:mx-4 pt-[21px] mt-4 max-md:py-4 max-sm:py-3 max-md:px-4 pb-5 pl-[88px] pr-10 max-lg:px-10 flex items-center justify-between rounded-full border border-white/15 bg-white/10">
          <Link href={"/"}>
            <Image
              height={44}
              width={150}
              src={"/assets/images/webp/logo.webp"}
              alt="logo"
              className="pointer-events-none max-md:h-8 max-md:w-28 max-sm:h-6 max-sm:w-20"
            />
          </Link>
          <ul className="flex items-center gap-6 max-lg:hidden">
            {HEADER_LIST.map((obj: HeaderItem, i: number) => (
              <div key={i}>
                {i === 2 ? (
                  <select className="bg-transparent text-white/70 cursor-pointer custom-select outline-none">
                    <option value={obj.title}>{obj.title}</option>
                    <option value={obj.subtitleOne}>{obj.subtitleOne}</option>
                    <option value={obj.subtitleTwo}>{obj.subtitleTwo}</option>
                  </select>
                ) : (
                  <li>
                    <Link
                      className="text-base hover:text-lightSky transition-all duration-300 leading-[19.36px] text-white/70"
                      href={obj.link || ""}
                    >
                      {obj.title}
                    </Link>
                  </li>
                )}
              </div>
            ))}
          </ul>
          <div className="flex gap-6 max-lg:hidden">
            <CustomButton
              text="Sign Up"
              myClass="border-lightSky rounded-[72px] !text-lightSky px-4 py-4 hover:bg-lightSky hover:shadow-lightSky hover:shadow-[0px_4px_24.6px_0px] hover:!text-black"
            />
            <CustomButton
              text="Login"
              myClass="border-lightSky rounded-[72px] hover:bg-transparent hover:shadow-none hover:!text-lightSky px-[24.5px] py-4 bg-lightSky !text-black shadow-[0px_4px_24.6px_0px] shadow-lightSky"
            />
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="overflow-hidden relative z-50 lg:hidden h-5 w-7 max-sm:h-4 max-sm:w-5 flex flex-col justify-between items-center"
          >
            <span
              className={`bg-white rounded-md w-full h-1 max-sm:h-[2.5px] block transition-all duration-300 ${
                open ? "translate-x-10" : ""
              }`}
            ></span>
            <span
              className={`bg-white rounded-md after:rounded-lg w-full h-1 max-sm:h-[2.67px] block relative after:bg-transparent after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:max-sm:h-[2.5px] after:transition-all after:duration-300 transition-all duration-300 ${
                open ? "rotate-45 after:rotate-90 after:!bg-white" : ""
              }`}
            ></span>
            <span
              className={`bg-white rounded-md w-full h-1 max-sm:h-[2.5px] block transition-all duration-300 ${
                open ? "-translate-x-10" : ""
              }`}
            ></span>
          </button>
        <div
          className={`w-full h-full xl:hidden !bg-black flex-col gap-6 max-md:gap-4 transition-all duration-500 left-0 -top-full xl:-top-[400%] z-40 fixed flex justify-center items-center ${
            open ? "top-0 left-0" : "-top-full xl:-top-[400%]"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 max-md:gap-4">
            {HEADER_LIST.map((obj: HeaderItem, i: number) => (
              <div key={i}>
                {i === 2 ? (
                  <select className="bg-transparent text-white/70 cursor-pointer custom-select outline-none">
                    <option value={obj.title}>{obj.title}</option>
                    <option value={obj.subtitleOne}>{obj.subtitleOne}</option>
                    <option value={obj.subtitleTwo}>{obj.subtitleTwo}</option>
                  </select>
                ) : (
                  <li>
                    <Link
                      onClick={() => setOpen(false)}
                      className="text-base hover:text-lightSky transition-all duration-300 leading-[19.36px] text-white/70"
                      href={obj.link || ""}
                    >
                      {obj.title}
                    </Link>
                  </li>
                )}
              </div>
            ))}
          </ul>
          <CustomButton
            customOnClick={() => setOpen(false)}
            text="Sign Up"
            myClass="border-lightSky rounded-[72px] !text-lightSky px-4 py-4 hover:bg-lightSky hover:shadow-lightSky hover:shadow-[0px_4px_24.6px_0px] hover:!text-black"
          />
          <CustomButton
            customOnClick={() => setOpen(false)}
            text="Login"
            myClass="border-lightSky rounded-[72px] hover:bg-transparent hover:shadow-none hover:!text-lightSky px-[24.5px] py-4 bg-lightSky !text-black shadow-[0px_4px_24.6px_0px] shadow-lightSky"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
