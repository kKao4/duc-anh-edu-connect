import Image from "next/image"
import buttonClick from "@/assets/svg/home/section-3/button-click.svg"
import { useGSAP } from "@gsap/react"
import { useHover } from "usehooks-ts"
import { useRef } from "react"
import gsap from "gsap"

interface MenuItemProps {
  children: React.ReactNode
}

export default function MenuItem({ children }: MenuItemProps) {
  const hoverRef = useRef<HTMLLIElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)
  const isHover = useHover(hoverRef)
  useGSAP(() => {
    if (isHover) {
      gsap.to(spanRef.current, { borderRadius: "0.3125rem", duration: 0.5 })
    } else {
      gsap.to(spanRef.current, { borderRadius: "0rem", duration: 0.5 })
    }
  }, [isHover])
  return (
    <li ref={hoverRef} className="relative text-3 font-bold -tracking-0.0625 text-white leading-1.2 flex flex-row items-end cursor-default group">
      <span ref={spanRef} className="size-[0.625rem] bg-secondary-40 mr-2">
        <Image src={buttonClick} data-role="button-click-deco" alt="tôn chỉ làm việc" className="absolute bottom-0 left-0 translate-y-[calc(50%-0.3rem)] -translate-x-[calc(50%-0.3rem)] size-[5.6875rem] opacity-0 group-hover:opacity-100 transition-500" />
      </span>
      <strong className="group-hover:translate-x-4 transition-500">
        {children}
      </strong>
    </li>
  )
}