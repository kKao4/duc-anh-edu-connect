"use client"

import Image from "next/image"
import findSchoolDesktop from "@/assets/image/home/section-2/find-school-desktop.webp"
import findSchoolMobile from "@/assets/image/home/section-2/find-school-mobile.webp"
import arrowRight from "@/assets/svg/home/section-2/find-school-arrow-right.svg"
import world from "@/assets/svg/home/section-2/world.svg"
import worldHover from "@/assets/svg/home/section-2/world-hover.svg"
import findSchoolButtonMobile from "@/assets/svg/home/section-2/find-school-btn-mobile.svg"
import union from "@/assets/svg/home/section-2/find-school-union.svg"
import glass from "@/assets/image/home/section-2/glass.png"
import glassMirror from "@/assets/image/home/section-2/glass-mirror.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export default function FindSchoolDeco() {
  const glassRef = useRef<HTMLImageElement>(null)
  const glassMirrorRef = useRef<HTMLImageElement>(null)
  useGSAP(() => {
    const tl1 = gsap.timeline({ repeat: -1 })
    tl1.to(glassRef.current, { bottom: "0rem", rotate: "-25deg", duration: 0.6 }, ">+=0.6")
    tl1.to(glassRef.current, { right: "-1rem", duration: 0.6 }, ">+=0.6")
    tl1.to(glassRef.current, { bottom: "3rem", right: "1.5rem", rotate: "0deg", duration: 0.6 }, ">+=0.6")
    const tl2 = gsap.timeline({ repeat: -1 })
    tl2.to(glassMirrorRef.current, { bottom: "1.25rem", rotate: "-25deg", duration: 0.6 }, ">+=0.6")
    tl2.to(glassMirrorRef.current, { right: "-0.5rem", duration: 0.6 }, ">+=0.6")
    tl2.to(glassMirrorRef.current, { bottom: "2.5rem", right: "1rem", rotate: "0deg", duration: 0.6 }, ">+=0.6")
  }, [])
  return (
    <div className="relative md:w-[29.8125rem] md:h-[35.5rem] md:overflow-hidden mt-8 md:mt-0 w-screen -ml-4 md:ml-0 rounded-lg">
      <Image src={findSchoolDesktop} alt="tìm trường cùng Đức Anh" className="hidden md:block w-full h-full object-cover " />
      <div className="absolute w-full h-[110%] top-0 left-0 overflow-x-hidden">
        <Image ref={glassMirrorRef} src={glassMirror} alt="tìm trường cùng Đức Anh" className="block md:hidden absolute bottom-10 right-4 w-[2.44rem] h-[2.6rem] z-10" />
      </div>
      <div className="absolute bottom-0 right-0 w-[23.75rem] h-[6.25rem] group cursor-pointer">
        <Image src={union} alt="tìm trường cùng Đức Anh" className="absolute bottom-0 right-0 hidden md:block object-cover w-[23.75rem] h-[6.25rem]" />
        <div className="hidden md:block absolute bottom-0 right-[7.5rem] w-[16.25rem] group-hover:w-[18rem] py-[1.25rem] pl-10 bg-linear-6 transition-500 text-0.875 text-white font-semibold leading-1.2 -tracking-0.0025 rounded-2xl cursor-pointer">
          <p>TÌM TRƯỜNG CÙNG ĐỨC ANH</p>
        </div>
        <Image src={arrowRight} alt="arrow right icon" className="hidden md:block absolute w-5 h-5 transition-500 top-[60%] right-[30%] opacity-0 group-hover:opacity-100 " />
        <Image src={world} alt="tìm trường cùng Đức Anh" className="hidden md:block absolute bottom-1 -right-2 w-[5.5rem] h-[5.5rem] group-hover:opacity-0 transition-500" />
        <Image src={worldHover} alt="tìm trường cùng Đức Anh" className="hidden md:block absolute bottom-1 -right-2 w-[5.5rem] h-[5.5rem] opacity-0 group-hover:opacity-100 transition-500" />
        <Image ref={glassRef} src={glass} alt="tìm trường cùng Đức Anh" className="hidden md:block absolute bottom-12 right-6 w-[3.75rem] h-[4rem]" />
      </div>
      <Image src={findSchoolMobile} alt="tìm trường cùng Đức Anh" className="block md:hidden w-full h-full object-cover" />
      <Image src={findSchoolButtonMobile} alt="tìm trường cùng Đức Anh" className="block md:hidden absolute bottom-0 right-0 translate-y-1/4 w-[15.5rem] h-[4.5rem]" />
    </div>
  )
}