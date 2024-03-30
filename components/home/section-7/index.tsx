import Image from "next/image";
import section7BackgroundImage from "@/assets/image/home/section-7/section-7-bg-img-desktop.webp"
import section7BackgroundImageMobile from "@/assets/image/home/section-7/section-7-bg-img-mobile.webp"
import Slide from "./Slide";

export default function Section7() {
  return (
    <section className="relative h-[36rem] md:h-[40rem]">
      {/* section 7 bg image desktop */}
      <Image src={section7BackgroundImage} alt="" className="hidden md:block absolute top-0 left-0 w-full h-full object-cover" />
      {/* section 7 bg image mobile */}
      <Image src={section7BackgroundImageMobile} alt="" className="block md:hidden absolute bottom-0 left-0 w-full object-cover" />
      {/* section 7 heading */}
      <h2 className="absolute left-1/2 top-[2rem] -translate-x-1/2 text-[7.5rem] md:text-[13.75rem] font-extrabold leading-1.6 tracking-[-0.4125rem] bg-linear-5 bg-clip-text text-transparent">
        2000
        <strong className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] text-center bg-linear-8 backdrop-blur-lg md:backdrop-blur-0 md:bg-white w-full text-primary-50 text-1 md:text-1.5 font-semibold leading-1.6 -tracking-0.02 uppercase py-1 md:p-0">trường học liên kết </strong>
      </h2>
      {/* section 7 slide */}
      <Slide />
    </section>
  )
}