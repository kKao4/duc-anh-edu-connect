import { useSwiper } from "swiper/react";
import arrowLeft from "@/assets/svg/home/section-6/arrow-left.svg"
import Image from 'next/image';

export default function SwiperPrevButton() {
  const swiper = useSwiper()
  return (
    <button className="size-12 bg-white rounded-lg flex items-center justify-center" onClick={() => swiper.slidePrev()}>
      <Image src={arrowLeft} alt="" className="size-5" />
    </button>
  )
}