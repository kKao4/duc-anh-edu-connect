"use client"

import { useGSAP } from "@gsap/react"
import { useEffect, useRef } from "react"
import Image from "next/image"
import section3BackgroundImage2 from "@/assets/image/home/section-3/section-3-bg-img-desktop-2.webp"
import star from "@/assets/svg/home/section-3/star.svg"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

export default function GsapPin() {
  const pinRef = useRef<HTMLDivElement>(null)
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to(pinRef.current, {
      scrollTrigger: {
        trigger: pinRef.current,
        start: "-50% top",
        end: "bottom-=5% top",
        pin: true,
      }
    })
  }, [])
  return (
    <div ref={pinRef} className="relative h-[44%] w-full">
      <Image src={section3BackgroundImage2} alt="" className="absolute top-0 left-0 w-full object-cover -translate-y-1/2" />
      <article className="absolute left-16 -top-14 w-[38.625rem]">
        <h3 className="text-primary-5 text-1 font-bold leading-1.5 uppercase mb-4">quá trình phát triển của Đức Anh</h3>
        <h1 className="text-primary-5 text-2.25 font-bold leading-1.5 -tracking-0.00375 mb-6">
          Thành tựu đạt được
          sau 24 năm đồng hành cùng
          các học sinh chinh phục ước mơ
        </h1>
        <button className="flex flex-row gap-3 items-center px-[1.88rem] py-[0.94rem] outline outline-1 outline-white rounded-lg">
          <b className="text-0.875 font-bold leading-1.2 text-white">Xem chi tiết</b>
          <Image src={star} alt="" className="w-4 h-4" />
        </button>
      </article>
    </div>
  )
}