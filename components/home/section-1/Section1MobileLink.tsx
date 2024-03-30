"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ISideBarButton } from "@/constant/home/section-1"
import dynamic from "next/dynamic"
const DynamicMenuModal = dynamic(() => import("./MenuModal"))

interface Section1MobileLinkProps extends ISideBarButton {
}

export default function Section1MobileLink({ mobileThumb, text, dropdown, href }: Section1MobileLinkProps) {
  const router = useRouter()
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <li className="shadow-section-1-mobile">
      {/* button */}
      <button
        className="flex flex-row items-center bg-white p-2 rounded-lg w-full"
        onClick={() => {
          setIsOpenMenu(prevState => !prevState)
          href && router.push(href)
        }}
      >
        <strong className="text-0.75 font-bold leading-1 tracking-0.0075 capitalize text-primary-70">
          {text}
        </strong>
        <Image src={mobileThumb} alt="" className="ml-auto rounded w-[1.75rem] h-[1.75rem]"  />
      </button>
      {/* menu */}
      {dropdown && (
        <DynamicMenuModal isOpenMenu={isOpenMenu} handleClose={() => setIsOpenMenu(false)} dropdown={dropdown} />
      )}
    </li>
  )
}