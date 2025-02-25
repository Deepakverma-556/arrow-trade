import Image from 'next/image';
import React from 'react'
import Description from '../common/Description';
import { CHANGING_THE_GAME } from '@/utils/helper';
import Heading from '../common/Heading';


interface MarketItems {
  title: string;
  description: string;
}

const ChangingGame = () => {
  return (
    <div className="max-w-[1172px] mx-auto px-4">
      <Heading
        text="How AI-Driven Market insights are"
        spanText="changing the Game"
        myClass="max-w-[550px] pb-[30px] pt-[180px] max-lg:pt-32 max-md:pt-20 max-sm:pt-12 max-sm:pb-0"
      />
      <div className="flex gap-[20px] flex-col max-sm:pt-6 pb-10">
        {CHANGING_THE_GAME.map((obj: MarketItems, i: number) => (
          <div key={i}>
            <p className="font-semibold text-xl max-md:text-lg max-sm:text-base leading-[24.2px] text-white pb-4 max-md:pb-2 max-sm:pb-2">
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
            className="rounded-[10px] max-xl:h-[450px] max-lg:h-96 max-sm:h-52 object-cover pointer-events-none max-md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default ChangingGame