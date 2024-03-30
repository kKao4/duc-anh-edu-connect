"use client"

import { section7Flags } from "@/constant/home/section-7";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import Image from "next/image";

export default function Slide() {
  return (
    <Swiper
      slidesPerView={3}
      loop
      loopAddBlankSlides
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      grid={{
        rows: 2,
        fill: "row"
      }}
      modules={[Grid, Autoplay]}
      speed={1200}
      allowTouchMove={false}
      freeMode
      breakpoints={{
        769: {
          grid: { rows: 1 },
          slidesPerView: 8,
        }
      }}
      className="section-7-swiper"
    >
      {section7Flags.map((item, i) => {
        return (
          <SwiperSlide key={i} className="section-7-slide">
            <div key={item.text} className="flex flex-col md:px-[3.19rem] py-6 items-center gap-3 flex-none">
              <Image src={item.flag} alt="" className="size-[3.625rem]" />
              <span className="text-primary-60 text-1 md:text-1.25 font-medium md:font-semibold leading-1.5 tracking-[-0.0125rem] w-max">
                {item.text}
              </span>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}