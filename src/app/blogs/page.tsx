"use client";
import Articals from "@/components/blog/Articals";
import Blogs from "@/components/blog/Blogs";
import Footer from "@/components/common/Footer";
import Hero from "@/components/blog/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Blogs />
      <Articals />
      <Footer />
    </>
  );
}
