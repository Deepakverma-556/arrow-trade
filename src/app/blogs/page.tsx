"use client";
import Article from "@/components/common/Article";
import Blogs from "@/components/blog/Blogs";
import Footer from "@/components/common/Footer";
import Hero from "@/components/blog/Hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense>
        <Hero />
        <Blogs />
        <Article />
        <Footer />
      </Suspense>
    </>
  );
}
