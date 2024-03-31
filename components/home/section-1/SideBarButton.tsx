import Image from "next/image";
import arrowRight from "@/assets/svg/home/section-1/arrow-right.svg"
import { ISideBarButton } from "@/constant/home/section-1";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface SideBarButtonProps extends ISideBarButton {
  children: React.ReactNode,
  canDropdown: boolean,
  isLastChild?: boolean
}

export default function SideBarButton({ thumb, imageThumb, backgroundStyle, text, canDropdown = false, isAsiaCountry = false, alt, children, href, isLastChild }: SideBarButtonProps) {
  return (
    <li className="relative px-6 group cursor-default last-of-type:rounded-b-xl">
      <div className={cn("relative flex py-2 flex-row flex-nowrap items-center", {
        "border-b border-primary-60/20": !isLastChild
      })}>
        {/* country thumb */}
        {isAsiaCountry ? (
          <button className="w-[2.375rem] h-[2.375rem] rounded-full text-[0.7rem] font-bold leading-1.5 text-primary-60 bg-[#F8F8F8]">ASIA</button>
        ) : thumb ? (
          <Image src={thumb} alt={alt} className="w-8 h-8 flex-none" priority />
        ) : null}

        {/* text content */}
        <strong className="absolute top-1/2 -translate-y-1/2 left-[4.25rem] text-primary-60 group-hover:text-white transition-500 text-0.875 font-bold leading-1 tracking-0.01313 uppercase z-10">{text}</strong>

        {/* arrow dropdown */}
        {canDropdown && <Image src={arrowRight} alt="arrow icon" className="w-5 h-5 flex-none ml-auto" />}
      </div>

      {/* bg image hover */}
      <Image src={imageThumb} alt={alt} className={cn("absolute w-1/2 h-full object-cover top-0 right-0 opacity-0 group-hover:opacity-100 transition-500", {
        "rounded-b-xl": isLastChild
      })}  priority={false} />

      {/* bg linear hover */}
      <span className={cn("absolute w-3/4 h-full top-0 left-0 opacity-0 group-hover:opacity-100 transition-500", {
        "rounded-b-xl": isLastChild
      })} style={{ background: backgroundStyle }} />

      {children}

      {href && <Link href={href} className="absolute top-0 left-0 w-full h-full bg-transparent" />}
    </li>
  )
}