import englandThumb from "@/assets/image/home/section-1/eng-thumb.webp";
import australiaThumb from "@/assets/image/home/section-1/aus-thumb.webp";
import newZealandThumb from "@/assets/image/home/section-1/new-thumb.webp";
import canadaThumb from "@/assets/image/home/section-1/canada-thumb.webp";
import usaThumb from "@/assets/image/home/section-1/usa-thumb.webp";
import singaporeThumb from "@/assets/image/home/section-1/singapore-thumb.webp";
import switzerlandThumb from "@/assets/image/home/section-1/swi-thumb.webp";
import asiaThumb from "@/assets/image/home/section-1/asia-thumb.webp";
import euroThumb from "@/assets/image/home/section-1/euro-thumb.webp";
import heTetThumb from "@/assets/image/home/section-1/he-tet-thumb.webp";
import giaoLuuVanHoaThumb from "@/assets/image/home/section-1/giao-luu-thumb.webp";
import englandImageThumb from "@/assets/image/home/section-1/eng-bg.webp";
import australiaImageThumb from "@/assets/image/home/section-1/aus-bg.webp";
import newZealandImageThumb from "@/assets/image/home/section-1/new-bg.webp";
import canadaImageThumb from "@/assets/image/home/section-1/canada-bg.webp";
import americaImageThumb from "@/assets/image/home/section-1/usa-bg.webp";
import singaporeImageThumb from "@/assets/image/home/section-1/singapore-bg.webp";
import switzerlandImageThumb from "@/assets/image/home/section-1/swi-bg.webp";
import asiaImageThumb from "@/assets/image/home/section-1/asia-bg.webp";
import euroImageThumb from "@/assets/image/home/section-1/euro-bg.webp";
import heTetImageThumb from "@/assets/image/home/section-1/he-tet-bg.webp";
import giaoLuuVanHoaImageThumb from "@/assets/image/home/section-1/giao-luu-bg.webp";
import englandThumbMobile from "@/assets/image/home/section-1/eng-thumb-mobile.webp";
import australiaThumbMobile from "@/assets/image/home/section-1/aus-thumb-mobile.webp";
import newZealandThumbMobile from "@/assets/image/home/section-1/new-thumb-mobile.webp";
import canadaThumbMobile from "@/assets/image/home/section-1/canada-thumb-mobile.webp";
import usaThumbMobile from "@/assets/image/home/section-1/usa-thumb-mobile.webp";
import singaporeThumbMobile from "@/assets/image/home/section-1/singapore-thumb-mobile.webp";
import switzerlandThumbMobile from "@/assets/image/home/section-1/swi-thumb-mobile.webp";
import asiaThumbMobile from "@/assets/image/home/section-1/asia-thumb-mobile.webp";
import euroThumbMobile from "@/assets/image/home/section-1/euro-thumb-mobile.webp";
import heTetThumbMobile from "@/assets/image/home/section-1/he-tet-thumb-mobile.webp";
import giaoLuuVanHoaThumbMobile from "@/assets/image/home/section-1/giao-luu-thumb-mobile.webp";
import documentQuestion from "@/assets/svg/home/section-2/document-question.svg";
import hat from "@/assets/svg/home/section-2/hat.svg";
import thptSchool from "@/assets/svg/home/section-2/thpt-school.svg";
import jobSchool from "@/assets/svg/home/section-2/job-school.svg";
import university from "@/assets/svg/home/section-2/university.svg";
import signUp from "@/assets/svg/home/section-2/sign-up.svg";
import visa from "@/assets/svg/home/section-2/visa.svg";
import award from "@/assets/svg/home/section-2/award.svg";
import job from "@/assets/svg/home/section-2/job.svg";
import { StaticImageData } from "next/image";

export interface ISideBarButton {
  thumb: string | StaticImageData;
  mobileThumb: string | StaticImageData;
  imageThumb: string | StaticImageData;
  backgroundStyle: string;
  text: string;
  isAsiaCountry?: boolean;
  dropdown?: {
    title: string;
    dropdowns: { icon: string | StaticImageData; text: string; href: string }[];
  };
  alt: string;
  href?: string;
}

export const sideBarButtons: ISideBarButton[] = [
  {
    thumb: englandThumb,
    mobileThumb: englandThumbMobile,
    imageThumb: englandImageThumb,
    alt: "Anh Quốc",
    backgroundStyle: "linear-gradient(to right, #294581 0%, #294581 68.45%, rgba(38, 69, 145, 0.00) 100%)",
    text: "Anh Quốc",
    dropdown: {
      title: "Thông tin chung về Anh",
      dropdowns: [
        {
          icon: documentQuestion,
          text: "Vì sao du học ở Anh?",
          href: "/404",
        },
        {
          icon: hat,
          text: "Hệ thống giáo dục đất nước",
          href: "/404",
        },
        {
          icon: thptSchool,
          text: "Các trường phổ thông tại Anh",
          href: "/404",
        },
        {
          icon: jobSchool,
          text: "Các trường đào tạo nghề tại Anh",
          href: "/404",
        },
        {
          icon: university,
          text: "Các trường đại học tại Anh",
          href: "/404",
        },
        {
          icon: signUp,
          text: "Đăng ký xin học tại Anh",
          href: "/404",
        },
        {
          icon: visa,
          text: "Visa du học Anh",
          href: "/404",
        },
        {
          icon: award,
          text: "Học bổng Anh",
          href: "/404",
        },
        {
          icon: job,
          text: "Việc làm - Định cư tại Anh",
          href: "/404",
        },
      ],
    },
  },
  {
    thumb: australiaThumb,
    mobileThumb: australiaThumbMobile,
    imageThumb: australiaImageThumb,
    alt: "Australia",
    backgroundStyle: "linear-gradient(to right, #092485 0%, #072283 68.45%, rgba(38, 69, 145, 0.00) 100%)",
    text: "Australia",
    dropdown: {
      title: "Thông tin chung về Úc",
      dropdowns: [
        {
          icon: documentQuestion,
          text: "Vì sao du học ở Úc?",
          href: "/404",
        },
        {
          icon: hat,
          text: "Hệ thống giáo dục đất nước",
          href: "/404",
        },
        {
          icon: thptSchool,
          text: "Các trường phổ thông tại Úc",
          href: "/404",
        },
        {
          icon: jobSchool,
          text: "Các trường đào tạo nghề tại Úc",
          href: "/404",
        },
        {
          icon: university,
          text: "Các trường đại học tại Úc",
          href: "/404",
        },
        {
          icon: signUp,
          text: "Đăng ký xin học tại Úc",
          href: "/404",
        },
        {
          icon: visa,
          text: "Visa du học Úc",
          href: "/404",
        },
        {
          icon: award,
          text: "Học bổng Úc",
          href: "/404",
        },
        {
          icon: job,
          text: "Việc làm - Định cư tại Úc",
          href: "/404",
        },
      ],
    },
  },
  {
    thumb: newZealandThumb,
    mobileThumb: newZealandThumbMobile,
    imageThumb: newZealandImageThumb,
    alt: "New Zealand",
    backgroundStyle: "linear-gradient(to right, #092485 0%, #072283 68.45%, rgba(38, 69, 145, 0.00) 100%)",
    text: "New Zealand",
    dropdown: {
      title: "Thông tin chung về New Zealand",
      dropdowns: [
        {
          icon: documentQuestion,
          text: "Vì sao du học ở New Zealand?",
          href: "/404",
        },
        {
          icon: hat,
          text: "Hệ thống giáo dục đất nước",
          href: "/404",
        },
        {
          icon: thptSchool,
          text: "Các trường phổ thông tại New Zealand",
          href: "/404",
        },
        {
          icon: jobSchool,
          text: "Các trường đào tạo nghề tại New Zealand",
          href: "/404",
        },
        {
          icon: university,
          text: "Các trường đại học tại New Zealand",
          href: "/404",
        },
        {
          icon: signUp,
          text: "Đăng ký xin học tại New Zealand",
          href: "/404",
        },
        {
          icon: visa,
          text: "Visa du học New Zealand",
          href: "/404",
        },
        {
          icon: award,
          text: "Học bổng New Zealand",
          href: "/404",
        },
        {
          icon: job,
          text: "Việc làm - Định cư tại New Zealand",
          href: "/404",
        },
      ],
    },
  },
  {
    thumb: canadaThumb,
    mobileThumb: canadaThumbMobile,
    imageThumb: canadaImageThumb,
    alt: "Canada",
    backgroundStyle: "linear-gradient(to right, #EC0616 0%, #F00416 68.45%, rgba(239, 5, 22, 0.00) 100%)",
    text: "Canada",
    dropdown: {
      title: "Thông tin chung về Canada",
      dropdowns: [
        {
          icon: documentQuestion,
          text: "Vì sao du học ở Canada?",
          href: "/404",
        },
        {
          icon: hat,
          text: "Hệ thống giáo dục đất nước",
          href: "/404",
        },
        {
          icon: thptSchool,
          text: "Các trường phổ thông tại Canada",
          href: "/404",
        },
        {
          icon: jobSchool,
          text: "Các trường đào tạo nghề tại Canada",
          href: "/404",
        },
        {
          icon: university,
          text: "Các trường đại học tại Canada",
          href: "/404",
        },
        {
          icon: signUp,
          text: "Đăng ký xin học tại Canada",
          href: "/404",
        },
        {
          icon: visa,
          text: "Visa du học Canada",
          href: "/404",
        },
        {
          icon: award,
          text: "Học bổng Canada",
          href: "/404",
        },
        {
          icon: job,
          text: "Việc làm - Định cư tại Canada",
          href: "/404",
        },
      ],
    },
  },
  {
    thumb: usaThumb,
    mobileThumb: usaThumbMobile,
    imageThumb: americaImageThumb,
    alt: "America",
    backgroundStyle: "linear-gradient(to right, #0E3565 16.24%, #C00314 68.45%, rgba(191, 3, 20, 0.00) 100%)",
    text: "America",
    dropdown: {
      title: "Thông tin chung về America",
      dropdowns: [
        {
          icon: documentQuestion,
          text: "Vì sao du học ở America?",
          href: "/404",
        },
        {
          icon: hat,
          text: "Hệ thống giáo dục đất nước",
          href: "/404",
        },
        {
          icon: thptSchool,
          text: "Các trường phổ thông tại America",
          href: "/404",
        },
        {
          icon: jobSchool,
          text: "Các trường đào tạo nghề tại America",
          href: "/404",
        },
        {
          icon: university,
          text: "Các trường đại học tại America",
          href: "/404",
        },
        {
          icon: signUp,
          text: "Đăng ký xin học tại America",
          href: "/404",
        },
        {
          icon: visa,
          text: "Visa du học America",
          href: "/404",
        },
        {
          icon: award,
          text: "Học bổng America",
          href: "/404",
        },
        {
          icon: job,
          text: "Việc làm - Định cư tại America",
          href: "/404",
        },
      ],
    },
  },
  {
    thumb: singaporeThumb,
    mobileThumb: singaporeThumbMobile,
    imageThumb: singaporeImageThumb,
    alt: "Singapore",
    backgroundStyle: "linear-gradient(to right, #0E3565 16.24%, #C00314 68.45%, rgba(191, 3, 20, 0.00) 100%)",
    text: "Singapore",
    dropdown: {
      title: "Thông tin chung về Singapore",
      dropdowns: [
        {
          icon: documentQuestion,
          text: "Vì sao du học ở Singapore?",
          href: "/404",
        },
        {
          icon: hat,
          text: "Hệ thống giáo dục đất nước",
          href: "/404",
        },
        {
          icon: thptSchool,
          text: "Các trường phổ thông tại Singapore",
          href: "/404",
        },
        {
          icon: jobSchool,
          text: "Các trường đào tạo nghề tại Singapore",
          href: "/404",
        },
        {
          icon: university,
          text: "Các trường đại học tại Singapore",
          href: "/404",
        },
        {
          icon: signUp,
          text: "Đăng ký xin học tại Singapore",
          href: "/404",
        },
        {
          icon: visa,
          text: "Visa du học Singapore",
          href: "/404",
        },
        {
          icon: award,
          text: "Học bổng Singapore",
          href: "/404",
        },
        {
          icon: job,
          text: "Việc làm - Định cư tại Singapore",
          href: "/404",
        },
      ],
    },
  },
  {
    thumb: switzerlandThumb,
    mobileThumb: switzerlandThumbMobile,
    imageThumb: switzerlandImageThumb,
    alt: "Thuỵ Sỹ",
    backgroundStyle: "linear-gradient(to right, #D80210 0%, #C0000E 68.45%, rgba(212, 6, 19, 0.00) 100%)",
    text: "Thuỵ Sỹ",
    dropdown: {
      title: "Thông tin chung về Thuỵ Sỹ",
      dropdowns: [
        {
          icon: documentQuestion,
          text: "Vì sao du học ở Thuỵ Sỹ?",
          href: "/404",
        },
        {
          icon: hat,
          text: "Hệ thống giáo dục đất nước",
          href: "/404",
        },
        {
          icon: thptSchool,
          text: "Các trường phổ thông tại Thuỵ Sỹ",
          href: "/404",
        },
        {
          icon: jobSchool,
          text: "Các trường đào tạo nghề tại Thuỵ Sỹ",
          href: "/404",
        },
        {
          icon: university,
          text: "Các trường đại học tại Thuỵ Sỹ",
          href: "/404",
        },
        {
          icon: signUp,
          text: "Đăng ký xin học tại Thuỵ Sỹ",
          href: "/404",
        },
        {
          icon: visa,
          text: "Visa du học Thuỵ Sỹ",
          href: "/404",
        },
        {
          icon: award,
          text: "Học bổng Thuỵ Sỹ",
          href: "/404",
        },
        {
          icon: job,
          text: "Việc làm - Định cư tại Thuỵ Sỹ",
          href: "/404",
        },
      ],
    },
  },
  {
    thumb: asiaThumb,
    mobileThumb: asiaThumbMobile,
    imageThumb: asiaImageThumb,
    alt: "Các nước châu Á",
    backgroundStyle: "linear-gradient(to right, #3468CD 0%, #3468CD 68.45%, rgba(52, 104, 205, 0.00) 100%)",
    text: "Các nước châu Á",
    isAsiaCountry: true,
    dropdown: {
      title: "Thông tin chung về các nước châu Á",
      dropdowns: [
        {
          icon: documentQuestion,
          text: "Vì sao du học ở các nước châu Á?",
          href: "/404",
        },
        {
          icon: hat,
          text: "Hệ thống giáo dục đất nước",
          href: "/404",
        },
        {
          icon: thptSchool,
          text: "Các trường phổ thông tại các nước châu Á",
          href: "/404",
        },
        {
          icon: jobSchool,
          text: "Các trường đào tạo nghề tại các nước châu Á",
          href: "/404",
        },
        {
          icon: university,
          text: "Các trường đại học tại các nước châu Á",
          href: "/404",
        },
        {
          icon: signUp,
          text: "Đăng ký xin học tại các nước châu Á",
          href: "/404",
        },
        {
          icon: visa,
          text: "Visa du học các nước châu Á",
          href: "/404",
        },
        {
          icon: award,
          text: "Học bổng các nước châu Á",
          href: "/404",
        },
        {
          icon: job,
          text: "Việc làm - Định cư tại các nước châu Á",
          href: "/404",
        },
      ],
    },
  },
  {
    thumb: euroThumb,
    mobileThumb: euroThumbMobile,
    imageThumb: euroImageThumb,
    alt: "Các nước châu Âu",
    backgroundStyle: " linear-gradient(to right, #002D88 0%, #012E89 68.45%, rgba(0, 46, 134, 0.00) 100%)",
    text: "Các nước châu Âu",
    dropdown: {
      title: "Thông tin chung về các nước châu Âu",
      dropdowns: [
        {
          icon: documentQuestion,
          text: "Vì sao du học ở các nước châu Âu?",
          href: "/404",
        },
        {
          icon: hat,
          text: "Hệ thống giáo dục đất nước",
          href: "/404",
        },
        {
          icon: thptSchool,
          text: "Các trường phổ thông tại các nước châu Âu",
          href: "/404",
        },
        {
          icon: jobSchool,
          text: "Các trường đào tạo nghề tại các nước châu Âu",
          href: "/404",
        },
        {
          icon: university,
          text: "Các trường đại học tại các nước châu Âu",
          href: "/404",
        },
        {
          icon: signUp,
          text: "Đăng ký xin học tại các nước châu Âu",
          href: "/404",
        },
        {
          icon: visa,
          text: "Visa du học các nước châu Âu",
          href: "/404",
        },
        {
          icon: award,
          text: "Học bổng các nước châu Âu",
          href: "/404",
        },
        {
          icon: job,
          text: "Việc làm - Định cư tại các nước châu Âu",
          href: "/404",
        },
      ],
    },
  },
  {
    thumb: heTetThumb,
    mobileThumb: heTetThumbMobile,
    imageThumb: heTetImageThumb,
    alt: "Du học Hè - Tết",
    backgroundStyle: "linear-gradient(to right, #BC151B 0%, #BC151B 68.45%, rgba(220, 26, 34, 0.00) 100%)",
    text: "Du học Hè - Tết",
    href: "/404",
  },
  {
    thumb: giaoLuuVanHoaThumb,
    mobileThumb: giaoLuuVanHoaThumbMobile,
    imageThumb: giaoLuuVanHoaImageThumb,
    alt: "Giao lưu văn hoá",
    backgroundStyle: "linear-gradient(to right, #3B85DE 0%, #3B85DE 68.45%, rgba(61, 135, 224, 0.00) 100%)",
    text: "Giao lưu văn hoá",
    href: "/404",
  },
];
