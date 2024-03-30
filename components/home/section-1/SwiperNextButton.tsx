"use client"

import chevronRight from "@/assets/svg/home/section-1/chevron-right.svg"
import Image from "next/image"
import { useSwiper } from 'swiper/react';

export default function SwiperNextButton() {
  const swiper = useSwiper()
  return (
    <button className="hidden md:flex w-12 h-12 rounded-lg absolute right-8 top-1/2 -translate-y-1/2 bg-white/40 z-10 items-center justify-center hover-opacity" onClick={() => swiper.slideNext()}>
      <Image src={chevronRight}  alt="chevron-right" className="w-5 h-5" />
    </button>
  )
}