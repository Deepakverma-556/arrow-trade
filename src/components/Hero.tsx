import React from 'react'
import Header from './common/Header'
import Description from './common/Description';

const Hero = () => {
  return (
    <div className="bg-black relative">
      <Header />
      <div className="max-w-[1172px] mx-auto px-4 pt-[70px] max-md:pt-16 max-sm:pt-12 pb-[30px]">
        <h1 className="text-[64.09px] max-md:text-5xl max-sm:text-4xl pb-4 leading-[77.56px] text-white max-w-[718px] mx-auto text-center">
          Unlock Knowledge with Our{" "}
          <span className="text-lightSky">Featured Articles</span>
        </h1>
        <Description myClass='max-w-[674px] mx-auto text-center' text="Explore our latest articles, insights, and expert advice on industry trends. Stay informed, gain new perspectives, and discover valuable tips to help you stay ahead." />
      </div>
      <div className='absolute h-[237px] w-[237px] rounded-full bg-lightSky -left-20 top-20 blur-[130px]'></div>
    </div>
  );
}

export default Hero