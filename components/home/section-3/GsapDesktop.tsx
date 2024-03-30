"use client"

import { menuItems } from "@/constant/home/section-3"
import { useGSAP } from "@gsap/react"
import { useRef, useEffect } from "react"
import MenuItem from "./MenuItem"
import section3BookImage from "@/assets/image/home/section-3/section-3-book-img.webp"
import section3Deco from "@/assets/image/home/section-3/section-3-deco.webp"
import mouse from "@/assets/svg/home/section-3/mouse-blue.svg"
import Image from "next/image"
import buttonClick from "@/assets/svg/home/section-3/button-click.svg"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

export default function GsapDesktop() {
  const divRef = useRef<HTMLDivElement>(null)
  const bookRef = useRef<HTMLImageElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const decoRef = useRef<HTMLImageElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)
  const buttonContainerRef = useRef<HTMLDivElement>(null)
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.set(bookRef.current, { x: "-50%" })
    gsap.set(textRef.current, { x: "-100%" })
    gsap.set(buttonContainerRef.current, { x: "-500%" })
    gsap.set(menuRef.current, { x: "100%" })
    gsap.set(decoRef.current, { autoAlpha: 0 })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: divRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 2,
      },
    })
    tl.to(bookRef.current, { x: "0", duration: 8 })
    tl.to(menuRef.current, { x: 0, duration: 8 }, "<")
    tl.to(buttonContainerRef.current, { x: "0", duration: 8 }, "<+=1")
    tl.to(textRef.current, { x: "0", duration: 8 }, "<+=2")
    tl.to(decoRef.current, {
      autoAlpha: 1, duration: 8, scrollTrigger: {
        trigger: decoRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 2,
      },
    })
    gsap.to("[data-role='button-click-deco']", { scale: 0.7, repeat: -1, yoyo: true, duration: 1, ease: "power1.inOut" })
  }, [])
  return (
    <div ref={divRef} className="hidden md:block w-[76.4rem] h-[44.4rem] bg-transparent absolute top-[44%] left-1/2 -translate-x-1/2 z-10">
      <Image ref={bookRef} src={section3BookImage} alt="" className="absolute left-6 top-0 w-[38rem] h-[44rem] object-cover" />
      <div ref={textRef} className="absolute top-[13.12rem] left-[2rem] w-[17.8125rem] flex flex-col gap-4">
        <strong className="text-right text-1 font-bold uppercase text-white">ĐỨc anh educonnect</strong>
        <h1 className="text-right text-[4.5rem] font-extrabold leading-1 tracking-[-0.045rem] text-white">Tôn chỉ làm việc</h1>
      </div>
      <ul ref={menuRef} className="absolute top-[8rem] right-0 flex flex-col gap-[1.88rem]">
        {menuItems.map(item => {
          return <MenuItem key={item.text}>{item.text}</MenuItem>
        })}
      </ul>
      <Image ref={decoRef} src={section3Deco} alt="" className="absolute bottom-0 left-[6.75rem] -z-10 w-[78.875rem] h-[9.1875rem]" />
      <div ref={buttonContainerRef} className="absolute left-[14rem] bottom-[9rem] size-[5.6875rem]">
        <Image data-role="button-click-deco" src={buttonClick} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[5.6875rem]" />
        <Image src={mouse} alt="" className="absolute top-1/2 left-1/2" />
      </div>
    </div>
  )
}