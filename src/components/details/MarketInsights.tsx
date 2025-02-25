import React from "react";
import Heading from "../common/Heading";
import Description from "../common/Description";
import {
  AI_DRIVEN_LIST,
  CHANGING_LIST,
  CHANGING_THE_GAME,
  MARKET_INSIGHTS_LIST,
} from "@/utils/helper";
import Image from "next/image";

interface MarketItems {
  title: string;
  description: string;
}
const MarketInsights = () => {
  return (
    <div>
      <div className="max-w-[1172px] mx-auto px-4">
        <div className="flex justify-between">
          <div className="max-w-[655px] max-lg:max-w-[570px]">
            <Heading
              text="What Are AI-Driven"
              spanText="Market Insights?"
              myClass="max-w-[450px] pb-4"
            />
            <Description text="AI-driven market insights harness the power of artificial intelligence to analyze vast amounts of market data in real time, providing actionable information that can help traders and investors make informed decisions." />
            <div className="flex gap-[20px] flex-col pt-[30px] max-sm:pt-6 pb-10">
              {MARKET_INSIGHTS_LIST.map((obj: MarketItems, i: number) => (
                <div key={i}>
                  <p className="font-semibold text-xl leading-[24.2px] text-white pb-4 max-sm:pb-2">
                    {obj.title}
                  </p>
                  <Description text={obj.description} />
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-b from-lightSky/0 to-lightSky/100 p-[1px] rounded-[10px] overflow-hidden">
              <div className="bg-black rounded-[10px] p-[10px] h-full w-full">
                <Image
                  width={635}
                  height={550}
                  src={"/assets/images/webp/ai.webp"}
                  alt="ai"
                  className="rounded-[10px] object-cover pointer-events-none"
                />
              </div>
            </div>
            <Heading
              text="How AI-Driven Market insights are"
              spanText="changing the Game"
              myClass="max-w-[550px] pb-[30px] pt-[180px]"
            />
            <div className="flex gap-[20px] flex-col max-sm:pt-6 pb-10">
              {CHANGING_THE_GAME.map((obj: MarketItems, i: number) => (
                <div key={i}>
                  <p className="font-semibold text-xl max-sm:text-sm leading-[24.2px] text-white pb-4 max-sm:pb-2">
                    {i + 1}. {obj.title}
                  </p>
                  <Description text={obj.description} />
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-b from-lightSky/0 to-lightSky/100 p-[1px] rounded-[10px] overflow-hidden">
              <div className="bg-black rounded-[10px] p-[10px] h-full w-full">
                <Image
                  width={635}
                  height={550}
                  src={"/assets/images/webp/robot.webp"}
                  alt="robot"
                  className="rounded-[10px] object-cover pointer-events-none"
                />
              </div>
            </div>
          </div>
          <div className="bg-[url(/assets/images/png/blur-bg.png)] bg-cover bg-no-repeat rounded-3xl max-h-max py-[30px] w-[364px] border-2 border-lightSky sticky top-20 right-0">
            <div className="px-5 pb-5">
              <div className="flex items-center gap-4">
                <Image
                  src={"/assets/images/webp/darrell.webp"}
                  alt="darrell"
                  width={80}
                  height={80}
                  className="object-cover rounded-full pointer-events-none"
                />
                <Description
                  text="Darrell Steward"
                  myClass="!text-white !font-semibold"
                />
              </div>
              <p className="font-semibold text-base pt-6 leading-[19.36px] text-white pb-4">
                What Are AI-Driven Market Insights?
              </p>
              <ul className="gap-4 flex flex-col">
                {AI_DRIVEN_LIST.map((obj, i) => (
                  <li key={i}>
                    <Description text={obj} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full h-[2px] bg-white/25"></div>
            <div className="px-5 pb-5">
              <p className="font-semibold text-base pt-6 leading-[19.36px] text-white pb-4">
                How AI-Driven Market insights are changing the Game
              </p>
              <ul className="gap-4 flex flex-col">
                {CHANGING_LIST.map((obj, i) => (
                  <li key={i}>
                    <Description text={obj} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;
