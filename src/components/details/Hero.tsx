import React from 'react'
import Header from '../common/Header'

const Hero = () => {
  return (
    <div className="relative">
      <Header />
      <div className="absolute h-[237px] w-[237px] rounded-full bg-lightSky -left-20 top-20 blur-[130px]"></div>
    </div>
  );
}

export default Hero