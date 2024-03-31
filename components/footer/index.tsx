import Link from "next/link";
import FooterLink from "./FooterLink";
import Image from "next/image";
import logo from "@/assets/svg/footer/footer-logo.svg"
import ScrollToTopButton from "./ScrollToTopButton";
import building from "@/assets/svg/footer/building.svg"
import card from "@/assets/svg/footer/card.svg"
import tel from "@/assets/svg/footer/tel.svg"
import { footerOfficeLocations } from "@/constant/footer";
import FooterSocialLinkGroup from "./FooterSocialLinkGroup";

export default function Footer() {
  return (
    <footer className="bg-primary-40">
      <div className="w-[88%] md:w-[93%] mx-auto pt-10 pb-4 md:pb-6">
        {/* footer heading */}
        <h3 className="hidden md:block text-primary-10 text-1.25 font-bold leading-1.2 -tracking-0.01313 text-center">
          CÔNG TY TƯ VẤN DU HỌC & DỊCH THUẬT ĐỨC ANH
        </h3>
        {/* footer link */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-3 md:mb-0">
          <div className="mt-[3.44rem] w-full md:w-1/3 flex flex-col md:flex-row order-2 md:order-first">
            <div className="flex flex-col mb-6 md:mb-0">
              <FooterLink href="/">Thông tin du học</FooterLink>
              <FooterLink href="/">HỌC BỔNG</FooterLink>
              <FooterLink href="/">VỀ CÔNG TY</FooterLink>
            </div>
            <div className="flex flex-col md:ml-[3.44rem]">
              <FooterLink href="/">THI PTE ACADEMY</FooterLink>
              <FooterLink href="/">HỌC TIẾNG ANH</FooterLink>
              <FooterLink href="/">VIỆC LÀM - ĐỊNH CƯ</FooterLink>
            </div>
          </div>
          <Link href="/" className="md:mt-[2.81rem] mx-auto hover-opacity order-first md:order-2 mb-6 md:mb-0">
            <Image src={logo} alt="Duc Anh EduConnect" className="w-[14.12rem] h-[4.14rem]" />
          </Link>
          <h3 className="block md:hidden text-[1.125rem] font-bold leading-1.6 w-[19rem] text-center text-white order-1">CÔNG TY TƯ VẤN DU HỌC & DỊCH THUẬT ĐỨC ANH</h3>

          <div className="w-full md:w-[26.125rem] mt-11 ml-auto order-last">
            <strong className="text-1 font-semibold flex flex-row items-center leading-1.2 -tracking-0.0025 text-white mb-[0.44rem]">
              <Image src={building} alt="chi nhánh văn phòng" className="block md:hidden mr-[0.56rem]" />
              Chi nhánh văn phòng
            </strong>
            <div className="w-full h-[0.0625rem] bg-primary-30" />
            <div className="mt-6 md:mt-4 flex flex-row md:flex-col flex-wrap">
              {footerOfficeLocations.map(item => {
                return (
                  <div key={item.name} className="basis-1/2 md:basis-auto flex flex-col md:flex-row items-start md:items-center mb-6 md:mb-4">
                    <p className="md:basis-[25%] text-0.875 leading-1.5 md:leading-1 text-white font-bold md:font-normal mb-3 md:mb-0 md:mr-4">{item.name}</p>
                    <p className="md:basis-[40%] text-0.75 md:text-0.875 leading-1.2 md:leading-1 text-primary-10 md:text-white mb-3 md:mb-0 md:mr-4">{item.detail}</p>
                    <p className="md:basis-[30%] text-0.75 md:text-0.875 leading-1.2 md:leading-1 text-primary-10 md:text-white md:text-right">{item.tel}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* footer information */}
        <div className="flex flex-col md:flex-row md:items-end mb-9 md:mb-[1.88rem]">
          <FooterSocialLinkGroup className="hidden md:flex order-first md:mr-[12.31rem]" />
          <div className="flex flex-col order-2 md:order-1 md:mr-[12.31rem]">
            <strong className="text-1 font-semibold flex md:hidden flex-row items-center leading-1.2 -tracking-0.0025 text-white mb-[0.44rem]">
              <Image src={tel} alt="hotline" className="block md:hidden mr-[0.56rem]" />
              Hotline
            </strong>
            <div className="block md:hidden w-full h-[0.0625rem] bg-primary-30 mb-4" />
            <p className="text-1 text-white leading-1.5 md:mb-1">Tel: 024 3971 6229</p>
            <p className="text-1 text-white leading-1.5">Tel: 028 3929 3995</p>
          </div>
          <div className="flex flex-col order-1 md:order-2 mb-9 md:mb-0">
            <strong className="text-1 font-semibold flex md:hidden flex-row items-center leading-1.2 -tracking-0.0025 text-white mb-[0.44rem]">
              <Image src={card} alt="liên hệ" className="block md:hidden mr-[0.56rem]" />
              Liên hệ
            </strong>
            <div className="block md:hidden w-full h-[0.0625rem] bg-primary-30 mb-4" />
            <p className="text-1 text-white leading-1.5 md:mb-1">Hotline chung: 098 870 9698</p>
            <p className="text-1 text-white leading-1.5">Email: duhoc@ducanh.edu.vn</p>
          </div>
        </div>
        <div className="flex md:hidden flex-row items-center">
          <FooterSocialLinkGroup className="flex md:hidden" />
          <Link href="/" className="ml-[2.88rem] mr-8 md:ml-0 md:mr-0 text-white text-0.875 md:text-0.75 font-semibold md:font-bold leading-1.5 md:leading-1 tracking-0.0075 capitalize">Policy</Link>
          <ScrollToTopButton />
        </div>
        {/* footer divider */}
        <div className="w-[20.4375rem] md:w-[92.5rem] h-[0.03125rem] bg-primary-10 mx-auto my-4 md:my-0" />
        <div className="flex md:mt-[1.6rem] flex-row items-center">
          <div className="flex flex-row items-center">
            <p className="text-0.75 leading-1.5 md:leading-1 text-white mr-6">@2023 DucAnh Educonnect</p>
            <p className="text-0.75 leading-1.5 md:leading-1 text-white">Made by OKHUB Agency</p>
          </div>
          <div className="hidden md:flex flex-row items-center ml-auto">
            <Link href="/" className="text-white text-0.75 font-bold leading-1 tracking-0.0075 capitalize mr-8">Policy</Link>
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </footer>
  )
}