import React, { useRef } from "react";
import Heading from "../common/Heading";
import { BLOG_CARDS_LIST } from "@/utils/helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RightArrow, SwiperLeftArrow, SwiperRightArrow } from "@/utils/icons";
import Image, { StaticImageData } from "next/image";
import Description from "../common/Description";
import CustomButton from "../common/CustomButton";

interface ArticalsItems{
  myClass?: string;
}
const Articals = ({myClass}:ArticalsItems) => {
  const myCard = BLOG_CARDS_LIST.filter((card) => card.isFeatured);
  const swiperRef = useRef(null);
  return (
    <div className={`pb-[180px] max-lg:pb-32 max-md:pb-20 max-sm:pb-12 ${myClass}`}>
      <Heading
        text="Latest"
        spanText="Articals"
        myClass="text-center pb-[70px] max-lg:pb-10 max-sm:pb-6"
      />
      {myCard.length === 0 ? (
        <p className="text-white text-xl text-center">Data No Found </p>
      ) : (
        <div className="max-w-[1440px] mx-auto relative">
          <div className="max-w-[1172px] px-4 mx-auto">
            <Swiper
              className=""
              slidesPerView={1}
              spaceBetween={24}
              modules={[Navigation, Pagination]}
              ref={swiperRef}
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
                1141: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                  centeredSlides: false,
                },
              }}
            >
              {myCard.map((obj, i) => (
                <SwiperSlide key={i} className="flex">
                  <div key={i} className="px-3 h-full">
                    <div className="bg-gradient-to-b h-full from-lightSky/0 to-lightSky/100 rounded-[10px] overflow-hidden px-[1px] pb-[1px]">
                      <div className="h-full bg-black rounded-[10px]">
                        <div className="relative">
                          <Image
                            src={obj.image}
                            alt={obj.imageAlt}
                            className="w-full h-[237px] max-sm:h-48 object-cover pointer-events-none"
                          />
                          <Description
                            text={obj.cardDate}
                            myClass="!text-white max-sm:!text-xs absolute z-20 top-5 right-5"
                          />
                          <div className="flex items-center gap-4 max-xl:gap-2 max-lg:gap-8 absolute z-20 left-1/2 -translate-x-1/2 -bottom-5">
                            <CustomButton
                              text="Productivity"
                              myClass="!font-normal !text-sm !leading-[21px] rounded-full px-[36.76px] py-[7.34px] border-lightSky !text-white/80 bg-darkGray hover:bg-lightSky hover:shadow-lightSky hover:shadow-[0px_4px_24.6px_0px] hover:!text-black"
                            />
                            <CustomButton
                              text={obj.buttonText}
                              myClass="!font-normal !text-sm !leading-[21px] rounded-full border-white py-[7.34px] px-[41.23px] !text-white/80 bg-lightGray hover:bg-lightSky hover:shadow-lightSky hover:shadow-[0px_4px_24.6px_0px] hover:!text-black hover:border-lightSky"
                            />
                          </div>
                        </div>
                        <div className="px-5 pb-[39px] max-sm:px-4 max-sm:pb-6">
                          <p className="font-semibold text-xl max-sm:text-lg max-sm:pt-8 leading-[24.2px] text-white pt-[42px]">
                            {obj.title} {obj.spanTitle}
                          </p>
                          <Description
                            text={obj.description}
                            myClass="pt-[10px] pb-6 max-sm:pt-1 max-sm:pb-4"
                          />
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-[10px]">
                              <Image
                                src={obj.profileImage}
                                alt={obj.profileImageAlt}
                                className="h-[50px] w-[50px] max-sm:h-10 max-sm:w-10 object-cover rounded-full pointer-events-none"
                              />
                              <p className="font-semibold text-base max-sm:text-sm leading-6 text-white">
                                {obj.profileName}
                              </p>
                            </div>
                            <RightArrow />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {myCard.length > 3 && (
              <div className="flex justify-center items-center gap-5 max-xl:mt-12">
                <button className="swiper-prev size-[60px] bg-lightSky flex justify-center items-center rounded-full max-lg:hidden xl:absolute top-[45%] -translate-y-1/2 z-10 left-[45px] max-[1400px]:left-0">
                  <SwiperLeftArrow />
                </button>
                <button className="swiper-next size-[60px] bg-lightSky flex justify-center items-center rounded-full max-lg:hidden xl:absolute right-[45px] top-[45%] -translate-y-1/2 z-20 max-[1400px]:right-0">
                  <span>
                    <SwiperRightArrow />
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Articals;
