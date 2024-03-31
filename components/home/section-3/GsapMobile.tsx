"use client"

import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import MobileBadge from "./MobileBadge"
import gsap from "gsap"

export default function GsapMobile() {
  const ref = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 })
    tl.to(ref.current, { x: "-180%", duration: 8, ease: "none" })
    tl.set(ref.current, { x: "65%" })
    tl.to(ref.current, { x: "0", duration: 2.888, ease: "none" })
  }, [])
  return (
    <div ref={ref} className="block md:hidden absolute top-[69rem] left-0 z-10 overflow-visible">
      <div className="flex flex-row items-center [&_*]:mr-3 mb-4 ml-3">
        <MobileBadge>Chuyên nghiệp</MobileBadge>
        <MobileBadge>Minh bạch</MobileBadge>
        <MobileBadge>Hiệu quả</MobileBadge>
        <MobileBadge>Chuyên nghiệp</MobileBadge>
        <MobileBadge>Đồng hành xuyên suốt</MobileBadge>
      </div>
      <div className="flex flex-row items-center [&_*]:mr-3 ml-3 mb-4">
        <MobileBadge>Hiệu quả</MobileBadge>
        <MobileBadge>Chuyên nghiệp</MobileBadge>
        <MobileBadge>Hiệu quả</MobileBadge>
        <MobileBadge>Đồng hành xuyên suốt</MobileBadge>
        <MobileBadge>Minh bạch</MobileBadge>
      </div>
      <div className="flex flex-row items-center [&_*]:mr-3 ml-3">
        <MobileBadge>Đồng hành xuyên suốt</MobileBadge>
        <MobileBadge>Chuyên nghiệp</MobileBadge>
        <MobileBadge>Minh bạch</MobileBadge>
        <MobileBadge>Hiệu quả</MobileBadge>
        <MobileBadge>Chuyên nghiệp</MobileBadge>
      </div>
    </div>
  )
}