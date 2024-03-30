import { ISection2TableData } from "@/constant/home/section-2";
import clsx from "clsx";
import Link from "next/link";
import arrowRight from "@/assets/svg/home/section-2/arrow-right-blue.svg"
import Image from "next/image";

interface TableRowProps extends ISection2TableData {
  isActive: boolean,
}

export default function TableRow({ isActive, href, date, time, location, country, event }: TableRowProps) {
  return (
    <tr className="even:bg-[rgba(134,189,253,0.10)]">
      <td className="md:flex flex-col md:gap-0.5 md:py-[0.8rem] border md:border-0 border-table">
        <span className={clsx("w-fit mx-auto text-0.75 p-3 md:p-0 font-semibold md:font-medium leading-1.3 text-grayscaletext-40 block", {
          "md:text-grayscaletext-50": !isActive,
          "md:text-secondary-50 text-0.75": isActive
        })}>
          {/* TODO: add format date fnc */}
          {date}
        </span>
        <span className={clsx("hidden md:block w-fit mx-auto text-0.75 font-semibold md:font-medium leading-1.3 px-2 rounded-full py-0.5", {
          "text-grayscaletext-80 bg-fourth-20": !isActive,
          "bg-secondary-50 text-white": isActive
        })}>
          {time}
        </span>
      </td>
      <td className="table-cell md:hidden border md:border-0 border-table">
        <span className="w-fit mx-auto text-0.75 p-3 md:p-0 font-semibold md:font-medium leading-1.3 text-grayscaletext-40 block">{time}</span>
      </td>
      <td className="border md:border-0 border-table">
        <span className={clsx("w-fit block p-3 py-3 md:py-1 rounded-full text-grayscaletext-40 md:text-grayscaletext-80 text-0.75 capitalize md:text-0.875 font-semibold md:font-medium leading-1.5 mx-auto", {
          "md:bg-fourth-20": location !== "online",
          "md:bg-third-20": location === "online"
        })}>
          {location}
        </span>
      </td>
      <td className="border md:border-0 border-table">
        <span className={clsx("p-3 md:p-0 text-0.75 md:text-0.875 font-semibold text-grayscaletext-40 md:font-medium leading-1.5 mx-auto block w-fit", {
          "md:text-grayscaletext-80": !isActive,
          "md:text-secondary-50": isActive
        })}>
          {country}
        </span>
      </td>
      <td className="border md:border-0 border-table">
        <span className={clsx("p-3 md:p-0 text-0.75 md:text-0.875 font-semibold leading-1.5 text-grayscaletext-40 block", {
          "md:text-primary-40": !isActive,
          "md:text-secondary-50": isActive
        })}>
          {event}
        </span>
      </td>
      <td className="border md:border-0 border-table">
        <Link href={href} className="md:block hidden w-fit px-4 py-2 outline outline-1 outline-primary-40 rounded-lg mx-auto hover:bg-primary-40 transition-500 text-primary-40 text-0.75 font-semibold md:font-medium leading-1.5 hover:text-white">
          Chi tiết
        </Link>
        <Link href={href} className=" md:hidden text-0.75 text-primary-40 font-semibold leading-1.3 flex flex-row gap-[0.38rem] p-3">
          Xem chi tiết
          <Image src={arrowRight} alt="arrow-right" />
        </Link>
      </td>
    </tr>
  )
}