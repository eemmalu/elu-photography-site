"use client";

import Button from "@/components/button";
import CarouselSlide from "@/components/carouselslide";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Info */}
      <div className="flex flex-col py-[calc(12px+4vw)] px-[calc(5px+10vw)] justify-center items-center bg-bg2">
        <h2>welcome!</h2>
        <div className="flex font-bold primary">I'M BASED IN</div>
        <div className="flex p-0 mb-5">greater Seattle area</div>
        <div className="flex font-bold primary">I SPECIALIZE IN</div>
        <div className="flex p-0">senior & grad photos</div>
        <div className="flex p-0]">individual portraits</div>
        <div className="flex p-0 mb-5">...anything with a story</div>
        <Button label="Book Now!" linkTo="book" />
      </div>

      {/* Image Carousel  */}
      <div className="flex flex-row content-center h-[calc(15vh*3)] overflow-hidden">
        <div className="flex w-[calc(15vh*4*18)] animate-slideCarousel">
          <CarouselSlide image="/homepage-carousel/1.jpg" />
          <CarouselSlide image="/homepage-carousel/2.jpg" />
          <CarouselSlide image="/homepage-carousel/3.jpg" />
          <CarouselSlide image="/homepage-carousel/4.jpg" />
          <CarouselSlide image="/homepage-carousel/5.jpg" />
          <CarouselSlide image="/homepage-carousel/6.jpg" />
          <CarouselSlide image="/homepage-carousel/7.jpg" />
          <CarouselSlide image="/homepage-carousel/8.jpg" />
          <CarouselSlide image="/homepage-carousel/9.jpg" />

          <CarouselSlide image="/homepage-carousel/1.jpg" />
          <CarouselSlide image="/homepage-carousel/2.jpg" />
          <CarouselSlide image="/homepage-carousel/3.jpg" />
          <CarouselSlide image="/homepage-carousel/4.jpg" />
          <CarouselSlide image="/homepage-carousel/5.jpg" />
          <CarouselSlide image="/homepage-carousel/6.jpg" />
          <CarouselSlide image="/homepage-carousel/7.jpg" />
          <CarouselSlide image="/homepage-carousel/8.jpg" />
          <CarouselSlide image="/homepage-carousel/9.jpg" />
        </div>
      </div>

      {/* About Me */}
      <div className="flex flex-col md:flex-row py-[calc(8px+4vw)] px-[calc(5px+10vw)] gap-16 justify-center items-center bg-bg2">
        {/* Left Side */}
        <div className="flex flex-col basis-6/10 gap-6">
          <div>
            <h2>hi, i'm emma!</h2>
            <div className="font-accent primary">(the photographer)</div>
          </div>
          <div className="flex">
            I’m committed to capturing your memories with love and care. You are
            unique and beautiful, and I believe your photos should reflect that!
            That’s why I spend time to make sure your shoot is tailored to you.
            Let’s make memories together.
          </div>
          <div className="flex">
            I have 4+ years of photography experience, and am currently pursuing
            my Bachelor’s at the University of Washington.
          </div>
          <Button label="Portfolio" linkTo="portfolio" />
        </div>
        {/* Right Side */}
        <div className="basis-4/10 rounded-full">
        <Image src="/emma.jpg"
            alt="Image of the photographer"
            width={500}
            height={500}
            className="w-full object-contain overflow-hidden rounded-full">
        </Image>
          {/* <img
            src="/emma.jpg"
            alt="Image of the photographer"
            className="w-full object-contain overflow-hidden rounded-full"
          /> */}
        </div>
      </div>
    </>
  );
}
