"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperPrevButton from "./SwiperPrevButton";
import SwiperNextButton from "./SwiperNextButton";
import slideImage1 from "@/assets/image/home/section-1/slide-image-1.webp"
import slideImage2 from "@/assets/image/home/section-1/slide-image-2.webp"
import Image from "next/image";
import knowMore from "@/assets/svg/home/section-1/know-more.svg"

export default function Slide() {
  return (
    <Swiper
      className="relative w-full md:w-[69rem] md:rounded-xl"
      spaceBetween={0}
      slidesPerView={1}
      speed={500}
      loop
    >
      <SwiperSlide className="relative overflow-hidden">
        {/* slide 1 */}
        <Image src={slideImage1} alt="slide-image-1" className="md:h-[37.5rem] object-cover" priority />
        <h1 className="text-1.25 md:text-3.75 font-extrabold uppercase leading-1.4 absolute z-10 top-5   md:top-9 left-6 md:left-24 text-white ">
          <span className="block">DU HỌC ANH QUỐC</span>
          <span className="block">cơ hội rộng mở</span>
        </h1>
        <button className="absolute top-20 md:top-[14rem] left-6 md:left-24 flex flex-row items-center gap-1 md:gap-[0.62rem] text-white text-0.75 md:text-1 font-bold leading-1.5 bg-linear-1 py-2 md:py-[0.62rem] px-3 md:px-5 rounded-[0.625rem]">
          <Image src={knowMore} alt="" className="size-4 md:size-5" />
          Tìm hiểu thêm
          <Image src={knowMore} alt="" className="size-4 md:size-5" />
        </button>
      </SwiperSlide>
      {/* slide 2 */}
      <SwiperSlide className="overflow-hidden">
        <Image src={slideImage2} alt="slide-image-2" className="md:h-[37.5rem] object-cover" priority={false} />
      </SwiperSlide>
      {/* prev/next btn */}
      <SwiperPrevButton />
      <SwiperNextButton />
    </Swiper>
  )
}