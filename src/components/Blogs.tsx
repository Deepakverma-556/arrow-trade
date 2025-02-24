import { BLOG_CARDS_LIST } from "@/utils/helper";
import { RightArrow, SearchIcon } from "@/utils/icons";
import Image from "next/image";
import React from "react";
import Description from "./common/Description";
import CustomButton from "./common/CustomButton";

const Blogs = () => {
  return (
    <div>
      <div className="max-w-[1172px] mx-auto px-4">
        <label
          htmlFor="search"
          className="border border-white/25 max-w-[558px] mx-auto flex rounded-[39px] items-center pl-[30px] max-md:pl-5"
        >
          <SearchIcon myClass="cursor-pointer" />
          <input
            id="search"
            type="text"
            className="outline-none placeholder:text-white bg-transparent text-base leading-6 w-full h-full py-5 max-md:py-3 pl-[10px] pr-10 text-white"
            placeholder="Search"
          />
        </label>
        <div className="flex flex-wrap -mx-3 pt-[46px]">
          {BLOG_CARDS_LIST.map((Obj, i) => (
            <div key={i} className="w-1/3 px-3 max-lg:w-1/2 max-sm:w-full pt-6">
              <div className="bg-gradient-to-b h-full from-lightSky/0 to-lightSky/100 cursor-pointer rounded-[10px] overflow-hidden px-[1px] pb-[1px]">
                <div className="h-full bg-black rounded-[10px]">
                  <div className="relative">
                    <Image
                      src={Obj.image}
                      alt={Obj.imageAlt}
                      className="w-full h-[237px] max-sm:h-48 object-cover pointer-events-none"
                    />
                    <Description
                      text={Obj.cardDate}
                      myClass="!text-white max-sm:!text-xs absolute z-20 top-5 right-5"
                    />
                    <div className="flex items-center gap-4 max-xl:gap-2 max-lg:gap-8 absolute z-20 left-1/2 -translate-x-1/2 -bottom-5">
                      <CustomButton
                        text="Productivity"
                        myClass="!font-normal !text-sm !leading-[21px] rounded-full px-[36.76px] py-[7.34px] border-lightSky !text-white/80 bg-darkGray hover:bg-lightSky hover:shadow-lightSky hover:shadow-[0px_4px_24.6px_0px] hover:!text-black"
                      />
                      <CustomButton
                        text={Obj.buttonText}
                        myClass="!font-normal !text-sm !leading-[21px] rounded-full border-white py-[7.34px] px-[41.23px] !text-white/80 bg-lightGray hover:bg-lightSky hover:shadow-lightSky hover:shadow-[0px_4px_24.6px_0px] hover:!text-black hover:border-lightSky"
                      />
                    </div>
                  </div>
                  <div className="px-5 pb-[39px] max-sm:px-4 max-sm:pb-6">
                    <p className="font-semibold text-xl max-sm:text-lg max-sm:pt-8 leading-[24.2px] text-white pt-[42px]">
                      {Obj.title}
                    </p>
                    <Description
                      text={Obj.description}
                      myClass="pt-[10px] pb-6 max-sm:pt-1 max-sm:pb-4"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[10px]">
                        <Image
                          src={Obj.profileImage}
                          alt={Obj.profileImageAlt}
                          className="h-[50px] w-[50px] max-sm:h-10 max-sm:w-10 object-cover rounded-full pointer-events-none"
                        />
                        <p className="font-semibold text-base max-sm:text-sm leading-6 text-white">
                          {Obj.profileName}
                        </p>
                      </div>
                      <RightArrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CustomButton
          text="See All Blogs"
          myClass="!mx-auto !flex px-[24.85px] py-[16.16px] border-lightSky rounded-[72px] hover:bg-transparent hover:shadow-none hover:!text-white bg-lightSky !text-black shadow-[0px_4px_24.6px_0px] shadow-lightSky mt-10 max-sm:mt-6"
        />
      </div>
    </div>
  );
};

export default Blogs;
