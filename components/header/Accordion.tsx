import arrowDown from "@/assets/svg/header/arrow-down-mobile.svg"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface AccordionProps {
  text: string,
  children: React.ReactNode
}

export default function Accordion({ text, children }: AccordionProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [isOpenAccordion, setIsOpenAccordion] = useState(false)
  useEffect(() => {
    if (divRef.current) {
      if (isOpenAccordion) {
        divRef.current.style.maxHeight = divRef.current.scrollHeight + "px"
      } else {
        divRef.current.style.maxHeight = "0px"
      }
    }
  }, [isOpenAccordion])
  return (
    <>
      <div className="first-of-type:mt-0 mt-3">
        <button className="flex flex-row w-full gap-3 items-center text-0.875 font-bold leading-1.2 uppercase text-primary-60 mb-3" onClick={() => setIsOpenAccordion(!isOpenAccordion)}>
          {text}
          <Image src={arrowDown} alt="" className="size-2.5 transition-500" style={isOpenAccordion ? { transform: "rotateX(180deg)" } : undefined} />
        </button>
        <div ref={divRef} className="flex flex-col gap-3 overflow-hidden max-h-0 transition-all duration-500 ease-default">
          {children}
        </div>
      </div>
      <div className="w-full h-[0.0625rem] bg-[#F1F3F7]" />
    </>
  )
}