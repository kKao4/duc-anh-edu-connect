import student1 from "@/assets/image/home/student-1.png";
import student2 from "@/assets/image/home/section-6/student-2.webp";
import student3 from "@/assets/image/home/student-3.png";
import student4 from "@/assets/image/home/student-4.png";
import { StaticImageData } from "next/image";

interface ISection6Student {
  name: string;
  quote: string;
  school: string;
  description: string;
  img: StaticImageData | string;
}

export const section6Students: ISection6Student[] = [
  {
    name: "John Doe 1",
    quote: "This is some text and look like a good quote",
    school: "Cựu nhi đồng",
    description: "Học bổng toàn phần trường Deakin University",
    img: student2,
  },
  {
    name: "John Doe 2",
    quote: "This is some text and look like a good quote",
    school: "Cựu nhi đồng",
    description: "Học bổng toàn phần trường Deakin University",
    img: student2,
  },
  {
    name: "Lê Minh",
    quote: "Em tin rằng tất cả mọi người có thể làm được giống em",
    school: "Cựu học sinh Amsterdam",
    description: "Học bổng toàn phần trường Deakin University ",
    img: student2,
  },
  {
    name: "John Doe 3",
    quote: "This is some text and look like a good quote",
    school: "Cựu nhi đồng",
    description: "Học bổng toàn phần trường Deakin University",
    img: student2,
  },
  {
    name: "John Doe 4",
    quote: "This is some text and look like a good quote",
    school: "Cựu nhi đồng",
    description: "Học bổng toàn phần trường Deakin University",
    img: student2,
  },
  {
    name: "John Doe 5",
    quote: "This is some text and look like a good quote",
    school: "Cựu nhi đồng",
    description: "Học bổng toàn phần trường Deakin University",
    img: student2,
  },
  {
    name: "John Doe 6",
    quote: "This is some text and look like a good quote",
    school: "Cựu nhi đồng",
    description: "Học bổng toàn phần trường Deakin University",
    img: student2,
  },
  {
    name: "John Doe 7",
    quote: "This is some text and look like a good quote",
    school: "Cựu nhi đồng",
    description: "Học bổng toàn phần trường Deakin University",
    img: student2,
  },
  {
    name: "John Doe 8",
    quote: "This is some text and look like a good quote",
    school: "Cựu nhi đồng",
    description: "Học bổng toàn phần trường Deakin University",
    img: student2,
  },
];
