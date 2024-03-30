import Link from "next/link";
import LangSwitch from "../../header/LangSwitch";
import MediumLink from "../../header/MediumLink";
import SearchBox from "../../header/SearchBox";
import SmallLink from "../../header/SmallLink";
import Image from "next/image";
import headerLogoDesktop from "@/assets/svg/header/logo-desktop.svg"
import arrowDown from "@/assets/svg/header/arrow-down.svg"
import SocialLinkGroup from "@/components/header/SocialLinkGroup";

export default function HeaderDesktop() {
  return (
    <header className="px-[3.75rem] py-6 flex-row items-center hidden md:flex">
      {/* header logo */}
      <Link href="/" className="hover-opacity flex-none mr-auto">
        <Image src={headerLogoDesktop} alt="logo" className="w-[14.56rem] h-[4.28rem]" priority />
      </Link>
      {/* header nav */}
      <div className="flex flex-col gap-6 ml-12">
        {/* first row */}
        <div className="flex flex-row ml-auto">
          {/* search box */}
          <SearchBox />

          {/* first nav */}
          <nav className="ml-8 flex flex-row items-center gap-4">
            <SmallLink href="/">
              Nghề HOT
            </SmallLink>
            <SmallLink href="/">
              Hợp tác
            </SmallLink>
            <SmallLink href="/">
              Trắc nghiệm nghề nghiệp
            </SmallLink>
            <SmallLink href="/">
              Tuyển dụng
            </SmallLink>
          </nav>

          {/* change lang */}
          <LangSwitch />

          {/* social link */}
          <SocialLinkGroup className="ml-12" />
        </div>

        {/* second row */}
        {/* second nav */}
        <nav className="flex flex-row gap-6 items-center">
          <MediumLink href="/">
            Về chúng tôi
          </MediumLink>
          <MediumLink href="/">
            Thông tin du học
          </MediumLink>
          <MediumLink href="/">
            Học bổng
          </MediumLink>
          <MediumLink href="/">
            Thi PTE Academic
          </MediumLink>
          <MediumLink href="/">
            Học tiếng anh
          </MediumLink>
          <MediumLink href="/">
            Việc Làm - Định cư
          </MediumLink>

          {/* dropdown */}
          <div className="relative group flex-none">
            <button className="text-0.875 font-bold leading-1 tracking-0.01313 uppercase text-primary-60 hover-opacity py-1.5 flex flex-row items-center gap-1">
              Cộng đồng
              <Image src={arrowDown} alt="arrow-down" className="w-[0.875rem] h-[0.875rem] -mt-1.5" />
            </button>
            <div className="absolute bottom-0 left-0 w-full z-10 translate-y-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-500">
              <nav className="flex flex-col bg-white outline-1 outline outline-primary-10 rounded overflow-hidden">
                <a className="py-3 px-3 text-start text-0.875 font-bold leading-1 tracking-0.01313 text-primary-60 hover:bg-neutral-100 transition-500 cursor-pointer" >Text 1</a>
                <a className="py-3 px-3 text-start text-0.875 font-bold leading-1 tracking-0.01313 text-primary-60 hover:bg-neutral-100 transition-500 cursor-pointer">Text 2</a>
                <a className="py-3 px-3 text-start text-0.875 font-bold leading-1 tracking-0.01313 text-primary-60 hover:bg-neutral-100 transition-500 cursor-pointer">Text 3</a>
              </nav>
            </div>
          </div>

          {/* btn */}
          <button className="text-0.875 font-bold leading-1 tracking-0.01313 uppercase rounded-full bg-primary-60 text-white px-5 py-[0.62rem] -mt-1 hover-opacity flex-none">Nộp hồ sơ online</button>
        </nav>
      </div>
    </header>
  )
}