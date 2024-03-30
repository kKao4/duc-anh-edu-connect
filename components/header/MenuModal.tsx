"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import logo from "@/assets/svg/header/logo-mobile.svg"
import xMark from "@/assets/svg/header/x-mark.svg"
import Link from "next/link";
import { useScrollLock } from 'usehooks-ts'
import findMobile from "@/assets/svg/header/find-mobile.svg"
import { menuHeader } from "@/constant/header";
import Accordion from "./Accordion";
import AccordionLink from "./AccordionLink";
import vietnam from "@/assets/svg/header/vietnam-lang-mobile.svg"
import SocialLinkGroup from "./SocialLinkGroup";

interface MenuModalProps {
  isOpen: boolean,
  handleClose: () => void
}

export default function MenuModal({ isOpen, handleClose }: MenuModalProps) {
  const nodeRef = useRef(null)
  const { lock, unlock } = useScrollLock({
    autoLock: false,
    lockTarget: document.body,
  })
  useEffect(() => {
    if (isOpen) {
      lock()
    } else {
      unlock()
    }
  }, [isOpen, lock, unlock])
  return (
    // @ts-ignore
    <CSSTransition nodeRef={nodeRef} in={isOpen} timeout={500} classNames={{
      enterActive: "animate-in slide-in-from-right-full duration-500 fill-mode-forwards ease-out",
      exitActive: "animate-out slide-out-to-right-full duration-500 fill-mode-forwards ease-out"
    }} mountOnEnter unmountOnExit>
      <div ref={nodeRef} className="fixed top-0 left-0 bg-white w-full h-screen overflow-y-auto text-black z-50 p-3 pb-28">
        {/* logo and close btn */}
        <div className="flex flex-row items-center mb-4">
          <Link href="/">
            <Image src={logo} alt="logo" className="w-28 h-8" />
          </Link>
          <button className="ml-auto" onClick={handleClose}>
            <Image src={xMark} alt="" className="size-5" />
          </button>
        </div>
        {/* search box */}
        <div className="border border-[#ECECEC] rounded-xl h-10 flex flex-row mb-3">
          <input
            type="text"
            name="search"
            className="grow h-full px-3 placeholder:text-0.75 rounded-xl placeholder:text-grayscaletext-10"
            placeholder="Nhập từ khoá"
          />
          <button className="h-full px-[0.62rem]">
            <Image src={findMobile} alt="" className="size-4" />
          </button>
        </div>
        {/* links */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          <button className="h-10 bg-primary-5 rounded-lg w-full text-0.75 font-semibold leading-1.2 text-primary-50">Nghề HOT</button>
          <button className="h-10 bg-primary-5 rounded-lg w-full text-0.75 font-semibold leading-1.2 text-primary-50">Hợp tác</button>
          <button className="h-10 bg-primary-5 rounded-lg w-full text-0.75 font-semibold leading-1.2 text-primary-50">Trắc nghiệm nghề nghiệp</button>
          <button className="h-10 bg-primary-5 rounded-lg w-full text-0.75 font-semibold leading-1.2 text-primary-50">Tuyển dụng</button>
        </div>
        {/* accordions */}
        <div className="flex flex-col gap-2 mb-6">
          {menuHeader.map((item, i) => {
            return (
              <Accordion text={item.text} key={item.text}>
                {item.child.map((link, i) => {
                  return (
                    <AccordionLink key={link.text} href={link.href} isActive={i === 0}>{link.text}</AccordionLink>
                  )
                })}
              </Accordion>
            )
          })}
        </div>
        {/* change lang and social link */}
        <div className="flex flex-row items-center">
          <div className="flex flex-col gap-[0.13rem]">
            <p className="text-grayscaletext-80 text-0.75 leading-1.5">Chọn ngôn ngữ</p>
            <div className="flex flex-row items-center gap-[0.56rem]">
              <Image src={vietnam} alt="" className="w-6 h-4" />
              <p className="text-primary-60 text-0.875 font-medium leading-1.5">Việt Nam</p>
            </div>
          </div>
          <SocialLinkGroup className="ml-auto" />
        </div>

        {/* nop ho so online */}
        <div className="fixed bottom-0 left-0 py-6 px-4 w-full bg-white" style={{ boxShadow: "0px -23px 6px 0px rgba(204, 204, 204, 0.00), 0px -15px 6px 0px rgba(204, 204, 204, 0.01), 0px -8px 5px 0px rgba(204, 204, 204, 0.05), 0px -4px 4px 0px rgba(204, 204, 204, 0.09), 0px -1px 2px 0px rgba(204, 204, 204, 0.10)" }}>
          <button className="w-full h-12 px-4 bg-primary-60 rounded-full text-white text-0.875 font-semibold leading-1.5">Nộp hồ sơ online</button>
        </div>
      </div>
    </CSSTransition>
  )
}