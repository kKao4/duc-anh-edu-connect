import Link from "next/link";
import { Transition } from "react-transition-group";
import Image from "next/image";
import documentInformation from "@/assets/svg/home/section-2/document-information.svg"
import checkmark from "@/assets/svg/home/section-2/checkmark.svg"
import { useRef } from "react";
import { ISideBarButton } from "@/constant/home/section-1";
import gsap from "gsap"
import { useOnClickOutside } from "usehooks-ts"

interface MenuModalProps {
  isOpenMenu: boolean,
  dropdown: ISideBarButton["dropdown"],
  handleClose: () => void
}

export default function MenuModal({ isOpenMenu, dropdown, handleClose }: MenuModalProps) {
  const layoutRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLElement>(null)
  useOnClickOutside(menuRef, handleClose)

  return (
    <Transition
      in={isOpenMenu}
      mountOnEnter
      unmountOnExit
      addEndListener={(node, done) => {
        const ctx = gsap.context(() => {
          if (isOpenMenu) {
            gsap.set(layoutRef.current, { autoAlpha: 0 })
            gsap.set(menuRef.current, { autoAlpha: 0, yPercent: 100 })
            gsap.to(layoutRef.current, { autoAlpha: 1, duration: 0.5 })
            gsap.to(menuRef.current, { autoAlpha: 1, yPercent: 0, duration: 0.5 })
          } else {
            gsap.to(menuRef.current, { autoAlpha: 0, yPercent: 100, duration: 0.5 })
            gsap.to(layoutRef.current, { autoAlpha: 0, duration: 0.5 });
          }
        }, node);
      }}
    >
      <div ref={layoutRef} className="fixed top-0 left-0 w-full h-screen bg-black/50 z-50">
        <nav ref={menuRef} className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-primary-50 p-3 w-full rounded-t-2xl">
          <div className="px-3 py-[0.88rem] flex flex-row gap-[0.38rem] items-center bg-white rounded-xl">
            <Image src={documentInformation} alt="" className="w-4 h-4" />
            <span className="text-primary-50 text-0.75 font-semibold leading-1.2">{dropdown?.title}</span>
            <Image src={checkmark} alt="checkmark" className="w-5 h-5 ml-auto" />
          </div>
          {dropdown?.dropdowns.map((item) => {
            return (
              <Link key={item.text} href={item.href} className="px-3 py-[0.88rem] flex flex-row gap-2 items-center rounded-xl">
                <Image src={item.icon} alt="" className="w-4 h-4" />
                <span className="text-white text-0.75 font-semibold leading-1.2">{item.text}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </Transition>
  )
}