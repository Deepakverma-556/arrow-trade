"use client";
import Articals from "@/components/common/Articals";
import Footer from "@/components/common/Footer";
import Hero from "@/components/details/Hero";
import MarketInsights from "@/components/details/MarketInsights";
import React, { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense>
        <Hero />
        <MarketInsights />
        <Articals myClass="pt-[180px] max-lg:pt-32 max-md:pt-20 max-sm:pt-12"/>
        <Footer />
      </Suspense>
    </>
  );
};

export default page;
