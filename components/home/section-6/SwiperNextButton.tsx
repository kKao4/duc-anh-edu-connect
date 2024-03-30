import { useSwiper } from "swiper/react";
import arrowRight from "@/assets/svg/home/section-6/arrow-right.svg"
import Image from 'next/image';

export default function SwiperNextButton() {
  const swiper = useSwiper()
  return (
    <button className="size-12 bg-primary-40 rounded-lg flex items-center justify-center" onClick={() => swiper.slideNext()}>
      <Image src={arrowRight} alt="" className="size-5" />
    </button>
  )
}