import Image from "next/image";
import section4BackgroundMobile from "@/assets/image/home/section-4/section-4-bg-img-mobile.webp"
import Heading1 from "@/components/typography/Heading1";
import Heading3 from "@/components/typography/Heading3";
import section4BackgroundImage from "@/assets/image/home/section-4/section-4-bg-img-desktop.webp"
import MobileTabs from "./MobileTabs";
import Tabs from "./Tabs";

export default function Section4() {
  return (
    <section className="relative md:h-screen mb-8 z-10">
      <div className="mx-auto w-[92%] -translate-y-8">
        <Heading3>Đồng hành với học sinh</Heading3>
        <Heading1>Dịch vụ tại Đức Anh</Heading1>
      </div>
      {/* desktop tabs */}
      <div className="relative hidden md:block mx-auto w-[92%]">
        <Tabs />
      </div>
      <Image src={section4BackgroundImage} alt="" className="hidden md:block absolute bottom-0 left-0 w-full object-cover -z-10" />

      {/* mobile tabs */}
      <div className="relative w-full h-[48rem] block md:hidden">
        {/* bg mobile */}
        <Image src={section4BackgroundMobile} alt="" className="absolute bottom-0 left-0 w-screen h-[38.375rem] object-cover" />
        <div className="mx-auto w-[92%] absolute left-1/2 -translate-x-1/2 grid grid-cols-2 gap-x-3 my-6 overflow-x-visible z-20 transition-500">
          <MobileTabs />
        </div>
      </div>

    </section>
  )
}