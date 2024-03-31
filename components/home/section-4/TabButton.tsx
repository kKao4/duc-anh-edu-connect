import { cn } from "@/lib/utils";
import clsx from "clsx";
import Image from "next/image";
import tabButtonActive from "@/assets/svg/home/section-4/tab-button-active.svg"

interface TabButtonProps {
  isActive: boolean,
  styleTitle?: React.CSSProperties,
  text: string,
  handleOnClick: () => void
}

export default function TabButton({ isActive, styleTitle, text, handleOnClick }: TabButtonProps) {
  return (
    <div className="relative w-full h-[4.6875rem] mb-3">
      {/* not active button */}
      <button className={cn("w-full h-[4.6875rem] bg-white shadow-fourth rounded-xl px-5 text-center transition-500 z-20", { "bg-mobile-bg": isActive })} onClick={handleOnClick}>
        {/* text button */}
        <strong className={clsx("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-40 text-1 font-bold leading-1.2 w-4/5 z-10", {
          "text-white": isActive
        })} style={styleTitle}>
          {text}
        </strong>
      </button>
      {/* active button */}
      <Image src={tabButtonActive} alt={text} className={clsx("absolute -top-3.5 -left-2 w-full scale-[1.3] transition-500 opacity-0", { "opacity-100": isActive })} />
    </div>
  )
}