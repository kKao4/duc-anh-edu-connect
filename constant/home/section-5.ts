import newsImage1 from "@/assets/image/home/section-5/section-5-news-img-1.webp";
import newsImage2 from "@/assets/image/home/section-5/section-5-news-img-2.webp";
import newsImage3 from "@/assets/image/home/section-5/section-5-news-img-3.webp";
import newsImage4 from "@/assets/image/home/section-5/section-5-news-img-4.webp";
import newsImage5 from "@/assets/image/home/section-5/section-5-news-img-5.webp";
import { StaticImageData } from "next/image";

interface New {
  id: string | number;
  date: string;
  title: string;
  description: string;
  img: string | StaticImageData;
}

export interface ISection5News {
  outstanding: New;
  news: New[];
}

export const section5News: ISection5News = {
  outstanding: {
    id: 9999,
    date: "12 Tháng 12, 2023",
    title: "Chiến lược du học nhanh - rẻ - hiệu quả tại Anh, Úc, Mỹ, NZ, Canada, Thuỵ Sỹ, Singapore",
    description:
      "Những lợi ích lớn nhất khi làm hồ sơ du học qua Duc Anh EduConnect là chúng tôi: giúp bạn gạt bỏ hoàn toàn các mối lo về giấy tờ, hồ sơ, thủ tục...",
    img: newsImage1,
  },
  news: [
    {
      id: 0,
      date: "",
      title: "Thành công săn học của Đại  số một nước Úc là trải nghiệm như thế nào?",
      description: "",
      img: newsImage2,
    },
    {
      id: 1,
      date: "",
      title: "Thành công săn học của Đại  số một nước Úc là trải nghiệm như thế nào?",
      description: "",
      img: newsImage2,
    },
    {
      id: 2,
      date: "",
      title: "Đức Anh thông báo: Chính thức thành lập văn phòng tại Melbourne.",
      description: "",
      img: newsImage3,
    },
    {
      id: 3,
      date: "",
      title: "Đức Anh thông báo: Chính thức thành lập văn phòng tại Melbourne.",
      description: "",
      img: newsImage3,
    },
    {
      id: 4,
      date: "",
      title: "Cách qui đổi điểm GPA: hệ số- hệ chữ: Những điều cần biết!",
      description: "",
      img: newsImage4,
    },
    {
      id: 5,
      date: "",
      title: "Cách qui đổi điểm GPA: hệ số- hệ chữ: Những điều cần biết!",
      description: "",
      img: newsImage4,
    },
    { id: 6, date: "", title: "Giới thiệu về Đại học Mỹ: Học bổng đến $22.000", description: "", img: newsImage5 },
    { id: 7, date: "", title: "Giới thiệu về Đại học Mỹ: Học bổng đến $22.000", description: "", img: newsImage5 },
    { id: 8, date: "", title: "This is some text", description: "", img: newsImage5 },
    { id: 9, date: "", title: "This is some text", description: "", img: newsImage5 },
    { id: 10, date: "", title: "This is some text", description: "", img: newsImage5 },
    { id: 11, date: "", title: "This is some text", description: "", img: newsImage5 },
    { id: 12, date: "", title: "This is some text", description: "", img: newsImage5 },
    { id: 13, date: "", title: "This is some text", description: "", img: newsImage5 },
    { id: 14, date: "", title: "This is some text", description: "", img: newsImage5 },
    { id: 15, date: "", title: "This is some text", description: "", img: newsImage5 },
  ],
};
