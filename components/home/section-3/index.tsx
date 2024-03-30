import Heading3 from "@/components/typography/Heading3";
import Image from "next/image";
import section3BackgroundImageDesktop1 from "@/assets/image/home/section-3/section-3-bg-img-desktop-1.webp"
import section3BackgroundImageDesktop3 from "@/assets/image/home/section-3/section-3-bg-img-desktop-3.webp"
import section3BackgroundImageMobile1 from "@/assets/image/home/section-3/section-3-bg-img-mobile-1.webp"
import section3BackgroundImageMobile2 from "@/assets/image/home/section-3/section-3-bg-img-mobile-2.webp"
import star from "@/assets/svg/home/section-3/star.svg"
import InformationBox from "./InformationBox";
import { informationBoxes } from "@/constant/home/section-3";
import GsapDesktop from "./GsapDesktop";
import GsapMobile from "./GsapMobile";
import GsapPin from "./GsapPin";

export default function Section3() {
  return (
    <section className="mb-10 md:mb-12">
      <div className="relative mx-auto mt-12 md:mt-20 h-[138rem] md:h-[104rem] w-full overflow-hidden">
        {/* phan dau tien: 24 nam kinh nghiem */}
        <article className="absolute left-4 md:left-16 top-0 w-[92%] md:max-w-[46.25rem] flex flex-col z-10">
          <Heading3 className="mb-1 md:mb-[1.31rem]">quá trình phát triển của Đức Anh</Heading3>
          <h1 className="text-grayscaletext-50 text-1.75 md:text-2.25 leading-1.3 font-bold -tracking-0.0625 mb-8 md:mb-[1.81rem] text-pretty">
            <span className="text-primary-40">24 năm kinh nghiệm đồng hành</span> với các học sinh chinh phục ước mơ vươn tới những vùng đất mới, <span className="text-primary-40">Đức Anh tự hào có những kết quả  mang lại sự thành công cho các học sinh và tạo dựng các cột mốc ấn tượng</span>.
          </h1>
          <div className="flex flex-row items-center">
            <button className="basis-1/2 md:basis-auto px-[1.88rem] h-12 text-0.875 font-bold leading-1.2 rounded-lg text-white bg-linear-5 hover-opacity">
              Về chúng tôi
            </button>
            <button className="basis-1/2 md:basis-auto ml-4 px-[1.88rem] h-12 text-0.875 font-bold leading-1.2 rounded-lg text-primary-50 outline outline-1 outline-primary-50 hover-opacity transition-500">
              Liên hệ tư vấn
            </button>
          </div>
        </article>
        <Image src={section3BackgroundImageMobile1} alt="" className="block md:hidden absolute bottom-0 left-0 w-full object-cover" />
        {/* phan thu 2: gsap desktop */}
        <GsapDesktop />
        {/* gsap mobile */}
        <GsapMobile />
        <article className="block md:hidden absolute left-1/2 -translate-x-1/2 top-[89rem] w-[89%] md:w-[38.625rem] z-20">
          <h3 className="text-primary-5 text-1 font-bold leading-1.5 uppercase mb-2 md:mb-4">quá trình phát triển của Đức Anh</h3>
          <h1 className="text-primary-5 text-1.75 md:text-2.25 font-bold leading-1.3 md:leading-1.5 -tracking-0.00375 mb-4 md:mb-6">
            Thành tựu đạt được
            sau 24 năm đồng hành cùng
            các học sinh chinh phục ước mơ
          </h1>
          <button className="flex flex-row gap-3 items-center px-[1.88rem] h-12 outline outline-1 outline-white rounded-lg text-0.875 font-bold leading-1.2 text-white uppercase md:normal-case">
            Xem chi tiết
            <Image src={star} alt="" className="w-4 h-4 hidden md:block" />
          </button>
        </article>
        <Image src={section3BackgroundImageMobile2} alt="" className="block md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[89%] object-cover" />
        {/* section 3 bg img */}
        <Image src={section3BackgroundImageDesktop1} alt="" className="hidden md:block absolute w-full object-cover bottom-0 left-0 -z-20" />
      </div>
      {/* phan thu 3: thanh tuu */}
      <div className="hidden md:block relative h-[105dvh]">
        <Image src={section3BackgroundImageDesktop3} alt="" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
        <GsapPin />
        <div className="absolute left-1/2 top-0 z-20">
          <div className="grid grid-cols-2 gap-x-[1.69rem] gap-y-[2.19rem]">
            {informationBoxes.map((item, i) => {
              return (
                <InformationBox
                  key={i}
                  translateY={i % 2 === 0 ? "full" : "half"}
                  {...item}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}