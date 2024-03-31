import Image from "next/image"
import triangle from "@/assets/svg/home/section-4/triangle.svg"
import { useEffect, useRef } from "react"
import clsx from "clsx"

interface TabContentMobileProps {
  children: string,
  isActive: boolean,
  className?: string,
  caretPosition: "left" | "right"
}

export default function TabContentMobile({ children, isActive, className, caretPosition }: TabContentMobileProps) {
  const divRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (divRef.current) {
      if (isActive) {
        setTimeout(() => {
          divRef.current!.style.display = "block"
          divRef.current!.style.maxHeight = divRef.current?.scrollHeight + "px"
        }, 600)
      } else {
        divRef.current.style.maxHeight = "0px"
        setTimeout(() => {
          divRef.current!.style.display = "none"
        }, 600)
      }
    }
  }, [isActive])
  return (
    <div ref={divRef} className={clsx("relative col-span-2 max-h-0 overflow-hidden transition-500", {
      "py-3": isActive,
    }, className)}>
      <Image src={triangle} alt="triangle icon" className={clsx("absolute top-5 right-[4.5rem] -translate-y-full size-[1.3125rem] -z-10 transition-500", {
        "right-[4.5rem]": caretPosition === "right",
        "left-[4.5rem]": caretPosition === "left",
        "h-0": !isActive
      })} />
      <article className="px-3 py-[0.6rem] text-center text-0.875 font-medium leading-1.5 bg-linear-5 rounded-2xl text-white">
        {children}
      </article>
    </div>
  )
}