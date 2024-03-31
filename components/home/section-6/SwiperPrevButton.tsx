import { useSwiper } from "swiper/react";
import arrowLeft from "@/assets/svg/home/section-6/arrow-left.svg"
import Image from 'next/image';

export default function SwiperPrevButton() {
  const swiper = useSwiper()
  return (
    <button className="size-12 mr-3 bg-white rounded-lg flex items-center justify-center hover-opacity transition-500" onClick={() => swiper.slidePrev()}>
      <Image src={arrowLeft} alt="slide trước" className="size-5" />
    </button>
  )
}