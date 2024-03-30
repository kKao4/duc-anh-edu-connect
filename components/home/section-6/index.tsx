import section6Deco from "@/assets/svg/home/section-6/section-6-bg-deco.svg"
import section6BackgroundImage from "@/assets/image/home/section-6/section-6-bg-img-desktop.webp"
import section6BackgroundImageMobile from "@/assets/image/home/section-6/section-6-bg-img-mobile.webp"
import Image from "next/image"
import "swiper/css/pagination";
import Slide from "./Slide";

export default function Section6() {
  return (
    <section className="relative h-screen bg-linear-7 pt-[3.5rem]">
      <div className="ml-[3.75rem]">
        <h3 className="text-primary-10 text-1.25 font-bold leading-1.2 -tracking-0.00375 uppercase mb-2">Đức Anh song hành cùng</h3>
        <h1 className="hidden md:block w-[25.53rem] text-4 font-extrabold leading-1.2 -tracking-0.08 text-white">Các học sinh tiêu biểu</h1>
      </div>

      {/* section 6 slide */}
      <Slide />

      {/* section 6 bg img desktop */}
      <Image src={section6BackgroundImage} alt="" className="hidden md:block absolute top-0 right-0 -z-10 w-full h-full object-cover" />
      <Image src={section6Deco} alt="" className="hidden md:block absolute bottom-0 left-0 w-full h-[37.8125rem]" />

      {/* section 6 bg img mobile */}
      <Image src={section6BackgroundImageMobile} alt="" className="block md:hidden absolute top-0 left-0 w-full object-cover" />
    </section>
  )
}