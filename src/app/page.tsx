"use client"
import Articals from "@/components/Articals";
import Blogs from "@/components/Blogs";
import Footer from "@/components/common/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Blogs />
      <Articals />
      <Footer/>
    </>
  );
}
