import Link from "next/link";
import HamburgerBar from "../../header/HamburgerBar";
import Image from "next/image";
import headerLogoMobile from "@/assets/svg/header/logo-mobile.svg"

export default function HeaderMobile() {
  return (
    <header className="sticky top-0 p-3 flex items-center flex-row flex-nowrap md:hidden z-40 bg-white">
      {/* logo */}
      <Link href="/">
        <Image src={headerLogoMobile}  alt="Duc Anh EduConnect" className="w-28 h-8" priority />
      </Link>
      {/* hamburger menu */}
      <HamburgerBar />
    </header>
  )
}