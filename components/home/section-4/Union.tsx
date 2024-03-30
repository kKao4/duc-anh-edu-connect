import union from "@/assets/svg/home/section-4/union.svg"
import unionActive from "@/assets/svg/home/section-4/union-active.svg"
import ellipse2842 from "@/assets/svg/home/section-4/ellipse-2842.svg"
import ellipse2843 from "@/assets/svg/home/section-4/ellipse-2843.svg"
import ellipse2844 from "@/assets/svg/home/section-4/ellipse-2844.svg"
import ellipse2842Active from "@/assets/svg/home/section-4/ellipse-2842-active.svg"
import cursorTraced from "@/assets/svg/home/section-4/cursor-traced-1.svg"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image"
import clsx from "clsx"
import { useRef } from "react"

interface UnionProps extends React.ComponentProps<"div"> {
  children: React.ReactNode,
  maxWidthContent?: string,
  isActive: boolean,
  handleOnClick: () => void,
  content: string,
  styleText?: React.CSSProperties
}

export default function Union({ children, className, isActive, handleOnClick, styleText, content, maxWidthContent = "", ...props }: UnionProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const firstEllipse = useRef<HTMLImageElement>(null)
  const secondEllipse = useRef<HTMLImageElement>(null)
  const thirdEllipse = useRef<HTMLImageElement>(null)
  useGSAP(() => {
    if (isActive) {
      gsap.to(contentRef.current, { autoAlpha: 1, duration: 0.5, delay: 0.25 })
      gsap.killTweensOf([firstEllipse.current, secondEllipse.current, thirdEllipse.current])
      gsap.to(firstEllipse.current, { width: "2.2rem", height: "2.2rem", duration: 0.5 })
      gsap.to(secondEllipse.current, { width: "1.5rem", height: "1.5rem", duration: 0.5 })
      gsap.to(thirdEllipse.current, { width: "0.7rem", height: "0.7rem", duration: 0.5 })
    } else {
      gsap.to(firstEllipse.current, { width: "1.467rem", height: "1.54rem", duration: 1.5, repeatDelay: 0.5, yoyo: true, repeat: -1 })
      gsap.to(secondEllipse.current, { width: "1rem", height: "1.05rem", duration: 1.5, repeatDelay: 0.5, yoyo: true, repeat: -1 })
      gsap.to(thirdEllipse.current, { width: "0.53rem", height: "0.53rem", duration: 1.5, repeatDelay: 0.5, yoyo: true, repeat: -1 })
      gsap.to(contentRef.current, { autoAlpha: 0, duration: 0.5 })
      gsap.to(firstEllipse.current, { backgroundColor: "transparent", duration: 0.5 })
    }
  }, [isActive])

  return (
    <div {...props} className={clsx("absolute -translate-x-5", className)}>
      <div className="relative max-w-fit max-h-fit select-none">
        {/* fake button */}
        <button
          className="bg-transparent absolute top-3.5 left-6 w-[53%] h-[25%] rounded-3xl z-10 peer"
          onClick={handleOnClick}
        />
        {/* btn bg not active */}
        <Image src={union} alt="box-content" className="w-[22rem] h-auto" />
        {/* btn bg active */}
        <Image src={unionActive} alt="box-content" className={clsx("absolute top-0 left-0 w-[22rem] h-auto  transition-500", {
          "opacity-0 peer-hover:opacity-100": !isActive
        })} />
        {/* title */}
        <p className={clsx("absolute top-[16.5%] left-[31%] text-white -translate-x-1/2 -translate-y-1/2 text-1 font-semibold leading-1.2 -tracking-0.0025 mx-auto text-center max-w-[40%]")} style={styleText}>
          {children}
        </p>
        {/* deco btn */}
        <div className="absolute top-[16%] left-[45%] z-10 w-14 h-14">
          <Image ref={firstEllipse} src={ellipse2842} alt="" className={clsx("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2.2rem] h-[2.2rem] transition-500")} />
          <Image src={ellipse2842Active} alt="" className={clsx("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2.2rem] h-[2.2rem] transition-500",
            { "opacity-100": isActive, "opacity-0": !isActive })} />
          <Image ref={secondEllipse} src={ellipse2843} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.5rem] h-[1.5rem]" />
          <Image ref={thirdEllipse} src={ellipse2844} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.8rem] h-[0.8rem]" />
          <Image src={cursorTraced} alt="" className="absolute top-1/2 left-1/2 w-[1.1rem] h-[1.1rem]" />
        </div>
        {/* content */}
        <div ref={contentRef} className="absolute top-[40%] left-6 w-[30.75rem] py-6 px-8 bg-white rounded-2xl opacity-0">
          <div className="absolute top-0.5 left-auto -translate-y-1/2 rounded w-6 h-6 rotate-45 bg-white" />
          <p className="text-1 text-grayscaletext-80 font-medium leading-1.5">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}