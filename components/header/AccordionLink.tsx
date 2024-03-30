import Link from "next/link"
import Image from "next/image"
import checkMark from "@/assets/svg/header/checkmark-mobile.svg"
import clsx from "clsx"

interface AccordionLinkProps extends React.ComponentProps<typeof Link> {
  isActive: boolean,
  children: React.ReactNode
}

export default function AccordionLink({ isActive, children, ...props }: AccordionLinkProps) {
  // TODO: close menu modal when clicked link
  return (
    <Link {...props} className={clsx("flex flex-row items-center text-0.875", {
      "leading-1.2 font-bold text-primary-60": isActive,
      "leading-1.7 text-grayscaletext-40": !isActive
    })}>
      {children}
      {isActive && <Image src={checkMark} alt="" className="size-5 ml-auto" />}
    </Link>
  )
}