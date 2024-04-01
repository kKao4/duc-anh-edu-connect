import SidebarDesktop from "./SidebarDesktop"
import SidebarMobile from "./SidebarMobile"
import Slide from "./Slide";
import Link from "next/link";
import Image from "next/image";
import youtubeLearning from "@/assets/svg/home/section-1/youtube-learning.svg"

export default function Section1() {
  return (
    <section className="w-full md:w-[97%] mx-auto mb-8 md:mb-20">
      <div className="flex flex-row w-full items-start">
        {/* side bar desktop ver */}
        <SidebarDesktop />

        {/* slide */}
        <Slide />
      </div>

      {/* menu mobile */}
      <div className="my-8 mobile-width flex md:hidden flex-row py-3 bg-white rounded-xl shadow-section-1">
        <Link href="/" className="flex flex-col w-1/4">
          <Image src={youtubeLearning} alt="Việc làm" className="mx-auto mb-4" />
          <span className="text-0.75 font-semibold leading-1.5 tracking-0.00375 text-primary-70 text-center">Việc làm</span>
        </Link>
        <Link href="/" className="flex flex-col w-1/4">
          <Image src={youtubeLearning} alt="Định cư" className="mx-auto mb-4" />
          <span className="text-0.75 font-semibold leading-1.5 tracking-0.00375 text-primary-70 text-center">Định cư</span>
        </Link>
        <Link href="/" className="flex flex-col w-1/4">
          <Image src={youtubeLearning} alt="E-learning" className="mx-auto mb-4" />
          <span className="text-0.75 font-semibold leading-1.5 tracking-0.00375 text-primary-70 text-center">E-learning</span>
        </Link>
        <Link href="/" className="flex flex-col w-1/4">
          <Image src={youtubeLearning} alt="Blog" className="mx-auto mb-4" />
          <span className="text-0.75 font-semibold leading-1.5 tracking-0.00375 text-primary-70 text-center">Blog</span>
        </Link>
      </div>

      {/* side bar mobile ver */}
      <SidebarMobile />
    </section>
  )
}