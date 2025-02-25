import { BLOG_CARDS_LIST } from "@/utils/helper";
import { RightArrow, SearchIcon } from "@/utils/icons";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import Description from "../common/Description";
import CustomButton from "../common/CustomButton";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface CardItem {
  image: StaticImageData;
  imageAlt: string;
  cardDate: string;
  buttonText: string;
  title: string;
  spanTitle: string;
  description: string;
  profileImage: StaticImageData;
  profileImageAlt: string;
  profileName: string;
}
const Blogs = () => {
  const [open, setOpen] = useState(6);
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const param = searchParams.get("page");
    if (param) {
      setOpen(parseInt(param) * 3);
    }
  }, [searchParams]);

  const myCards = BLOG_CARDS_LIST.slice(0, open).filter(
    (obj) => obj.title && obj.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleShowMore = () => {
   setOpen(open + 3);
   const nextPage = Math.floor(open / 3) + 1;
    window.history.pushState(null, "", `?page=${nextPage}`);
  };
  return (
    <div className="relative overflow-hidden pb-[180px] max-lg:pb-32 max-md:pb-20 max-sm:pb-12">
      <div className="max-w-[1172px] mx-auto px-4">
        <label
          htmlFor="search"
          className="border border-white/25 max-w-[558px] mx-auto flex rounded-[39px] items-center pl-[30px] max-md:pl-5"
        >
          <SearchIcon myClass="cursor-pointer" />
          <input
            onChange={(e) => setSearch(e.target.value)}
            id="search"
            type="text"
            className="outline-none placeholder:text-white bg-transparent text-base leading-6 w-full h-full py-5 max-md:py-3 pl-[10px] pr-10 text-white"
            placeholder="Search"
          />
        </label>
        <div className="flex flex-wrap -mx-3 pt-[46px]">
          {myCards.map((obj: CardItem, i: number) => (
            <div key={i} className="w-1/3 px-3 max-lg:w-1/2 max-sm:w-full pt-6">
              <Link
                href={`/blogs/${obj.title.toLowerCase().replace(/ /g, "-")}`}
                key={i}
              >
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
              </Link>
            </div>
          ))}
        </div>
        <CustomButton
          customOnClick={handleShowMore}
          text={"See All Blogs"}
          myClass="!mx-auto !flex px-[24.85px] py-[16.16px] border-lightSky rounded-[72px] hover:bg-transparent hover:shadow-none hover:!text-lightSky bg-lightSky !text-black shadow-[0px_4px_24.6px_0px] shadow-lightSky mt-10 max-sm:mt-6"
        />
      </div>
      <div className="absolute h-[237px] w-[237px] rounded-full bg-lightSky -right-28 bottom-72 blur-[130px]"></div>
    </div>
  );
};

export default Blogs;
