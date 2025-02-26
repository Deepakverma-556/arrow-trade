"use client";
import Articals from "@/components/common/Articals";
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
        <Articals />
        <Footer />
      </Suspense>
    </>
  );
}
