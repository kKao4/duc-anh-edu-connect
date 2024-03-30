"use client"

import chevronLeft from "@/assets/svg/home/section-1/chevron-left.svg"
import Image from "next/image"
import { useSwiper } from 'swiper/react';

export default function SwiperPrevButton() {
  const swiper = useSwiper()
  return (
    <button className="hidden md:flex w-12 h-12 rounded-lg absolute left-8 top-1/2 -translate-y-1/2 bg-white/40 z-10 items-center justify-center hover-opacity" onClick={() => swiper.slidePrev()}>
      <Image src={chevronLeft}  alt="chevron-left" className="w-5 h-5" />
    </button>
  )
}