"use client"

import Image from "next/image"
import hamburgerBar from "@/assets/svg/header/hamburger-bar.svg"
import { useState } from "react";
import dynamic from "next/dynamic";
const DynamicMenuModal = dynamic(() => import("./MenuModal"), { ssr: false })

export default function HamburgerBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="ml-auto w-8 h-8 rounded-full bg-elevation-20 flex items-center justify-center"
        onClick={() => setIsOpen(prevState => !prevState)}
      >
        <Image src={hamburgerBar} priority alt="mở menu" className="w-4 h-4" />
      </button>
      <DynamicMenuModal isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  )
}