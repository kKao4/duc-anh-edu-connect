"use client"

import { section6Students } from "@/constant/home/section-6"
import { Pagination } from "swiper/modules"
import { SwiperSlide, Swiper } from "swiper/react"
import SwiperNextButton from "./SwiperNextButton"
import SwiperPrevButton from "./SwiperPrevButton"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { createPortal } from "react-dom"

export default function Slide() {
  const ref = useRef<HTMLDivElement>(null)
  const [activeStudent, setActiveStudent] = useState(0)
  const [key, setKey] = useState(0)
  useEffect(() => {
    const checkScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
          setKey(1)
        }
      }
    }
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll)
  }, [])
  return (
    <>
      <div ref={ref} className="absolute top-16 md:top-[47%] w-[88%] md:w-auto left-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20 flex flex-col md:flex-row items-start">
        <b className="font-playFairDisplay text-[5rem] leading-[0rem] md:text-8.75 font-bold text-white opacity-50 md:leading-1 -translate-y-[20%] mb-2 md:mb-0 md:mr-4">“</b>
        <article className="md:w-[30.375rem]">
          <div className="mb-6 md:mb-[1.81rem]">
            {section6Students.map((item, i) => {
              if (activeStudent === i) {
                return (
                  <div key={item.name}>
                    <h2 className="text-1.5 md:text-2 font-extrabold leading-1.3 -tracking-0.02 text-white mb-2 md:mb-5">{item.quote}</h2>
                    <strong className="text-white text-1 md:text-1.25 font-bold leading-1.2 -tracking-0.01313 md:-translate-x-3.5 block mb-2">- {item.name}</strong>
                    <p className="md:w-3/4 text-white text-0.875 md:text-1 leading-1.5">{item.school}</p>
                    <p className="md:w-3/4 text-white text-0.875 md:text-1 leading-1.5 line-clamp-2 mb-1">{item.description}</p>
                  </div>
                )
              }
              return null
            })}
            <div id="section-6-slide-pagination-container" className="flex flex-col items-center"></div>
          </div>
          <div className="flex flex-row items-center">
            <button className="basis-1/2 md:basis-auto md:px-[1.88rem] h-10 md:h-12 bg-white text-primary-40 text-0.875 font-bold leading-1 tracking-0.01313 md:uppercase rounded-lg md:rounded-[0.625rem] md:border-2 border-primary-20 hover-opacity transition-500 mr-[0.81rem]">Xem chi tiết</button>
            <button className="basis-1/2 md:basis-auto md:px-[1.88rem] h-10 md:h-12 border md:border-2 border-white text-0.875 font-bold leading-1 tracking-0.01313 md:uppercase rounded-lg md:rounded-[0.625rem] text-white hover:bg-white hover:text-primary-40 transition-500 hover:border-primary-20">Tất cả học sinh</button>
          </div>
        </article>
      </div>

      <Swiper
        key={key}
        className="section-6-slide"
        slidesPerView={2}
        initialSlide={2}
        centeredSlides={false}
        speed={800}
        pagination={{
          el: ".section-6-pagination",
          clickable: true
        }}
        onActiveIndexChange={(swiper) => {
          setActiveStudent(swiper.activeIndex)
        }}

        breakpoints={{
          769: {
            slidesPerView: "auto",
            centeredSlides: true,
          }
        }}
        modules={[Pagination]}
      >
        {section6Students.map(item => {
          return (
            <SwiperSlide key={item.name}>
              <Image src={item.img} alt={item.alt} className="section-6-image-slide" />
            </SwiperSlide>
          )
        })}
        <div className="hidden md:flex absolute top-1/3 right-16 flex-row items-center z-10">
          <SwiperPrevButton />
          <SwiperNextButton />
        </div>
        {createPortal(<div className="section-6-pagination" />, document.getElementById("section-6-slide-pagination-container") ?? document.body)}
      </Swiper>

    </>
  )
}