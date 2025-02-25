import React from "react";
import Header from "../common/Header";
import Description from "../common/Description";
import CustomButton from "../common/CustomButton";
import Image from "next/image";
import { useParams } from "next/navigation";
import { BLOG_CARDS_LIST } from "@/utils/helper";

const Hero = () => {
  const { id } = useParams();
  const blogArray = BLOG_CARDS_LIST.filter(
    (obj) =>
      obj && obj.title && obj.title.toLowerCase().replace(/\s+/g, "-") === id
  );

  const myArray: any = blogArray.length ? blogArray[0] : null;

  return (
    <div>
      {myArray && (
        <div className="relative pb-[271px] max-xl:pb-[180px] max-lg:pb-32 max-md:pb-20 max-sm:pb-12">
          <Header />
          <div className="max-w-[1440px] mx-auto relative">
            <div className="max-w-[1172px] mx-auto px-4">
              <div className="flex max-md:flex-wrap -mx-3 items-center justify-between max-xl:pt-10">
                <div className="w-[43%] max-lg:w-[55%] max-md:w-full px-3">
                  <p className="text-[64.09px] max-lg:text-5xl max-md:text-4xl leading-[77.56px] text-white xl:pt-[91px] pb-4 max-md:pb-3">
                    {myArray.title}{" "}
                    <span className="font-semibold text-lightSky">
                      {myArray.spanTitle}
                    </span>
                  </p>
                  <Description text={myArray.description} />
                  <div className="flex items-center justify-between pt-[30px] max-md:max-w-96 max-md:pt-5">
                    <CustomButton
                      text="Productivity"
                      myClass="!font-normal !text-sm !leading-[21px] rounded-full px-[36.76px] py-[7.34px] border-lightSky !text-white/80 bg-darkGray hover:bg-lightSky hover:shadow-lightSky hover:shadow-[0px_4px_24.6px_0px] hover:!text-black"
                    />
                    <CustomButton
                      text={myArray.buttonText}
                      myClass="!font-normal !text-sm !leading-[21px] rounded-full border-white py-[7.34px] px-[41.23px] !text-white/80 bg-lightGray hover:bg-lightSky hover:shadow-lightSky hover:shadow-[0px_4px_24.6px_0px] hover:!text-black hover:border-lightSky"
                    />
                    <p className="text-white max-sm:!text-xs ">
                      {myArray.cardDate}
                    </p>
                  </div>
                </div>
                <Image
                  width={720}
                  height={570}
                  src={myArray.image}
                  alt={myArray.imageAlt}
                  className="xl:absolute right-0 -top-[111px] max-xl:h-[400px] max-xl:w-[450px] max-lg:w-96 max-lg:h-72 max-[900px]:h-64 max-[900px]:w-80 object-cover max-md:mx-auto max-md:mt-8 max-md:h-80 max-sm:h-64 max-md:w-full max-xl:px-3"
                />
              </div>
            </div>
          </div>
          <div className="absolute h-[237px] w-[237px] rounded-full bg-lightSky -left-20 top-20 blur-[130px]"></div>
        </div>
      )}
    </div>
  );
};

export default Hero;
