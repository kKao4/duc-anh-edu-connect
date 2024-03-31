"use client"

import { ISection5NewsResponse } from "@/app/api/section-5/route"
import { fetcher } from "@/utils/fetcher"
import { useState } from "react"
import Pagination from "./Pagination";
import useSWR from "swr"
import Image from "next/image";
import Link from "next/link";

interface Section5NewsProps {
  newsSkeleton: React.ReactNode,
  paginationSkeleton: React.ReactNode
}

export default function Section5News({ newsSkeleton, paginationSkeleton }: Section5NewsProps) {
  const [page, setPage] = useState(0)
  const { data: newsData, isLoading } = useSWR<ISection5NewsResponse>(`/api/section-5?page=${page}`, fetcher)
  return (
    <>
      <div className="flex flex-row [&_>_button]:mr-2 items-center overflow-x-auto p-px">
        <button className="flex-none text-white md:text-grayscaletext-50 text-0.75 font-bold leading-1.2 uppercase rounded-lg bg-primary-60 md:bg-primary-5 md:outline outline-1 outline-primary-20 px-4 py-3">Tất cả bài viết</button>
        <button className="flex-none text-grayscaletext-50 text-0.75 font-bold leading-1.2 uppercase rounded-lg hover-opacity outline outline-1 outline-grayscaletext-10 px-4 py-3">Cẩm nang</button>
        <button className="flex-none text-grayscaletext-50 text-0.75 font-bold leading-1.2 uppercase rounded-lg hover-opacity outline outline-1 outline-grayscaletext-10 px-4 py-3">Học Sinh Đức Anh</button>
        <button className="flex-none text-grayscaletext-50 text-0.75 font-bold leading-1.2 uppercase rounded-lg hover-opacity outline outline-1 outline-grayscaletext-10 px-4 py-3">Thông tin học bổng</button>
        <button className="flex-none text-grayscaletext-50 text-0.75 font-bold leading-1.2 uppercase rounded-lg hover-opacity outline outline-1 outline-grayscaletext-10 px-4 py-3">Việc làm định cư</button>
        {/* desktop pagination */}
        <div className="hidden md:flex ml-auto flex-row">
          <Pagination
            page={page}
            setPage={setPage}
            isLastPage={newsData?.isLastPage}
          />
        </div>
      </div>
      {isLoading ? newsSkeleton : (
        <div className="flex flex-col md:flex-row mt-6 items-stretch">
          {/* outstanding news */}
          <article className="md:w-[33.33%] p-4 md:p-6 md:outline outline-1 outline-primary-50 rounded-xl md:rounded-2xl md:bg-transparent bg-white shadow-section-5-card md:shadow-none mr-3 md:mr-6">
            <div className="flex flex-row items-center mb-4">
              <p className="text-0.875 text-grayscaletext-30 leading-1.7">{newsData?.data.outstanding.date}</p>
              <b className="text-0.625 font-bold leading-1.2 uppercase px-4 py-3 bg-secondary-10 rounded-xl ml-auto">tin tức nổi bật</b>
            </div>
            <Link href="/" className="text-grayscaletext-80 text-1.25 md:text-1.5 -tracking-0.0025 font-bold mb-4 hover:text-primary-40 transition-500 line-clamp-3">
              {newsData?.data.outstanding.title}
            </Link>
            <p className="text-grayscaletext-50 text-1 leading-1.5 mb-6 line-clamp-3">
              {newsData?.data.outstanding.description}
            </p>
            {/* TODO: Image default */}
            <Image src={newsData!.data.outstanding.img} alt={newsData?.data.outstanding.alt ?? ""} className="rounded-lg h-[12.6875rem] md:h-[17.375rem]" />
          </article>
          {/* news */}
          <div className="md:w-[66.67%] grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-3 md:gap-y-8">
            {newsData?.data.news.map(item => {
              return (
                <article key={item.id} className="flex flex-row w-full md:bg-transparent bg-white md:p-0 p-4 shadow-fourth md:shadow-none rounded-xl">
                  <div className="w-[9.19rem] h-[6.0625rem] md:w-[11.9375rem] md:h-[7.875rem] flex-none overflow-hidden rounded-lg flex justify-center items-center mr-3 md:mr-6">
                    <Image src={item.img} alt={item.alt} />
                  </div>
                  <div className="flex flex-col">
                    <Link href="/" className="text-grayscaletext-80 line-clamp-2 text-1 font-semibold -tracking-0.0025 hover:text-primary-40 transition-500 mb-4 md:mb-3">
                      {item.title}
                    </Link>
                    <p className="text-primary-70 font-semibold leading-1 uppercase tracking-0.015 px-3 md:px-5 py-2 bg-primary-10 w-fit rounded-full text-0.75">HỌC SINH ĐỨC ANH</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      )}
      {/* mobile pagination */}
      {isLoading ? paginationSkeleton : (
        <div className="flex md:hidden justify-center items-center w-full mt-4">
          <Pagination
            page={page}
            setPage={setPage}
            isLastPage={newsData?.isLastPage}
          />
        </div>
      )}
    </>
  )
}