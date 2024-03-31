"use client"

import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import Image from "next/image"
import section3BackgroundImage2 from "@/assets/image/home/section-3/section-3-bg-img-desktop-2.webp"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

export default function GsapPin() {
  const pinRef = useRef<HTMLDivElement>(null)
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to(pinRef.current, {
      scrollTrigger: {
        trigger: pinRef.current,
        start: "-50% top",
        end: "bottom-=5% top",
        pin: true,
      }
    })
  }, [])
  return (
    <div ref={pinRef} className="relative h-[44%] w-full">
      <Image src={section3BackgroundImage2} alt="thành tựu đạt được" className="absolute top-0 left-0 w-full object-cover -translate-y-1/2" />
      <article className="absolute left-16 -top-14 w-[38.625rem]">
        <h3 className="text-primary-5 text-1 font-bold leading-1.5 uppercase mb-4">quá trình phát triển của Đức Anh</h3>
        <h1 className="text-primary-5 text-2.25 font-bold leading-1.5 -tracking-0.00375 mb-6">
          Thành tựu đạt được
          sau 24 năm đồng hành cùng
          các học sinh chinh phục ước mơ
        </h1>
        <button className="flex flex-row items-center px-[1.88rem] py-[0.94rem] outline outline-1 outline-white rounded-lg group hover:bg-white hover:text-primary-40 text-0.875 font-bold leading-1.2 transition-500 text-white">
          Xem chi tiết          
          <svg className="w-4 h-4 ml-3 group-hover:[&_*]:fill-primary-40 [&_*]:transition-500" xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
            <g filter="url(#filter0_d_459_40839)">
              <path d="M7.21574 9.47122L6.97865 12.2384L9.50388 11.1549L12.0291 12.2384L11.792 9.47122L13.5898 7.37372L10.918 6.74704L9.50388 4.36719L8.08973 6.74704L5.41797 7.37372L7.21574 9.47122Z" fill="white" />
            </g>
            <g filter="url(#filter1_d_459_40839)">
              <path d="M8.98047 1.52085C8.98047 1.23319 9.21366 1 9.50132 1C9.78898 1 10.0222 1.23319 10.0222 1.52085V2.57823C10.0222 2.86589 9.78898 3.09908 9.50132 3.09908C9.21366 3.09908 8.98047 2.86589 8.98047 2.57823V1.52085Z" fill="white" />
            </g>
            <g filter="url(#filter2_d_459_40839)">
              <path d="M4.20418 3.9706C4.00081 3.76463 4.00081 3.43068 4.20418 3.22471C4.40755 3.01874 4.73729 3.01874 4.94066 3.22471L5.66951 3.96287C5.87289 4.16884 5.87289 4.50279 5.66951 4.70876C5.46614 4.91473 5.1364 4.91473 4.93303 4.70876L4.20418 3.9706Z" fill="white" />
            </g>
            <g filter="url(#filter3_d_459_40839)">
              <path d="M2.00781 8.58805C2.00781 8.29672 2.24398 8.06055 2.53532 8.06055H3.55292C3.84425 8.06055 4.08042 8.29672 4.08042 8.58805C4.08042 8.87938 3.84425 9.11556 3.55292 9.11556H2.53532C2.24398 9.11556 2.00781 8.87938 2.00781 8.58805Z" fill="white" />
            </g>
            <g filter="url(#filter4_d_459_40839)">
              <path d="M13.3292 4.70693C13.1258 4.50096 13.1258 4.16701 13.3292 3.96104L14.058 3.22288C14.2614 3.01691 14.5911 3.01691 14.7945 3.22288C14.9979 3.42885 14.9979 3.7628 14.7945 3.96877L14.0657 4.70693C13.8623 4.9129 13.5326 4.9129 13.3292 4.70693Z" fill="white" />
            </g>
            <g filter="url(#filter5_d_459_40839)">
              <path d="M14.9219 8.58805C14.9219 8.29672 15.158 8.06055 15.4494 8.06055H16.467C16.7583 8.06055 16.9945 8.29672 16.9945 8.58805C16.9945 8.87938 16.7583 9.11556 16.467 9.11556H15.4494C15.158 9.11556 14.9219 8.87938 14.9219 8.58805Z" fill="white" />
            </g>
            <g filter="url(#filter6_d_459_40839)">
              <path d="M3.57422 13.7539H15.4265V16.0046H3.57422V13.7539Z" fill="white" />
            </g>
            <g filter="url(#filter7_d_459_40839)">
              <path d="M1.35156 16.0039H17.6484V18.2546H1.35156V16.0039Z" fill="white" />
            </g>
            <defs>
              <filter id="filter0_d_459_40839" x="4.58808" y="4.09056" width="9.83165" height="9.53086" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="0.553257" />
                <feGaussianBlur stdDeviation="0.414943" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.117855 0 0 0 0 0.0998535 0 0 0 0 1 0 0 0 0.06 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_459_40839" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_459_40839" result="shape" />
              </filter>
              <filter id="filter1_d_459_40839" x="8.15058" y="0.723372" width="2.70274" height="3.7584" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="0.553257" />
                <feGaussianBlur stdDeviation="0.414943" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.117855 0 0 0 0 0.0998535 0 0 0 0 1 0 0 0 0.06 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_459_40839" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_459_40839" result="shape" />
              </filter>
              <filter id="filter2_d_459_40839" x="3.2209" y="2.79368" width="3.4293" height="3.45274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="0.553257" />
                <feGaussianBlur stdDeviation="0.414943" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.117855 0 0 0 0 0.0998535 0 0 0 0 1 0 0 0 0.06 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_459_40839" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_459_40839" result="shape" />
              </filter>
              <filter id="filter3_d_459_40839" x="1.17793" y="7.78392" width="3.73399" height="2.71446" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="0.553257" />
                <feGaussianBlur stdDeviation="0.414943" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.117855 0 0 0 0 0.0998535 0 0 0 0 1 0 0 0 0.06 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_459_40839" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_459_40839" result="shape" />
              </filter>
              <filter id="filter4_d_459_40839" x="12.3459" y="2.79173" width="3.4293" height="3.45274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="0.553257" />
                <feGaussianBlur stdDeviation="0.414943" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.117855 0 0 0 0 0.0998535 0 0 0 0 1 0 0 0 0.06 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_459_40839" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_459_40839" result="shape" />
              </filter>
              <filter id="filter5_d_459_40839" x="14.092" y="7.78392" width="3.73399" height="2.71446" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="0.553257" />
                <feGaussianBlur stdDeviation="0.414943" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.117855 0 0 0 0 0.0998535 0 0 0 0 1 0 0 0 0.06 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_459_40839" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_459_40839" result="shape" />
              </filter>
              <filter id="filter6_d_459_40839" x="2.74433" y="13.4773" width="13.5113" height="3.91075" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="0.553257" />
                <feGaussianBlur stdDeviation="0.414943" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.117855 0 0 0 0 0.0998535 0 0 0 0 1 0 0 0 0.06 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_459_40839" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_459_40839" result="shape" />
              </filter>
              <filter id="filter7_d_459_40839" x="0.521677" y="15.7273" width="17.9566" height="3.91075" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="0.553257" />
                <feGaussianBlur stdDeviation="0.414943" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.117855 0 0 0 0 0.0998535 0 0 0 0 1 0 0 0 0.06 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_459_40839" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_459_40839" result="shape" />
              </filter>
            </defs>
          </svg>
        </button>
      </article>
    </div>
  )
}