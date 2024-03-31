"use client"

import { cn } from "@/lib/utils"
import { isAfter, parse } from "date-fns"
import TableRow from "./TableRow"
import { ISection2TableDataResponse } from "@/app/api/section-2/route"
import { fetcher } from "@/utils/fetcher"
import { useState } from "react"
import useSWR from "swr"
import clsx from "clsx"
import FindSchoolDeco from "./FindSchoolDeco"

interface TableProps {
  tableSkeleton: React.ReactNode,
  paginationSkeleton: React.ReactNode
}

export default function Table({ tableSkeleton, paginationSkeleton }: TableProps) {
  const [page, setPage] = useState(0)
  const { data: tableData, isLoading } = useSWR<ISection2TableDataResponse>(`/api/section-2?page=${page}`, fetcher)

  return (
    <>
      {/* buttons group */}
      <div className="hidden md:flex flex-row items-stretch mb-[1.88rem]">
        <button
          className={cn("w-12 h-12 group outlined-button", { "opacity-50 pointer-events-none": page === 0 })}
          onClick={() => setPage(prevState => prevState - 1 < 0 ? 0 : prevState - 1)}
          disabled={page === 0}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="group-hover:stroke-white transition-500" d="M12.5013 15.8337L6.66797 10.0003L12.5013 4.16699" stroke="#3468CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className={cn("w-12 h-12 group outlined-button ml-3", { "opacity-50 pointer-events-none": tableData?.isLastPage })}
          onClick={() => setPage(prevState => prevState + 1)}
          disabled={tableData?.isLastPage}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="group-hover:stroke-white transition-500" d="M7.5 4.16699L13.3333 10.0003L7.5 15.8337" stroke="#3468CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="py-3 px-10 outlined-button ml-6 text-0.875 font-bold leading-1 tracking-0.01313 uppercase hover:text-white transition-500 text-primary-50">
          Chọn quốc gia bạn quan tâm
        </button>
        <button className="py-3 px-10 outlined-button ml-3 text-0.875 font-bold leading-1 tracking-0.01313 uppercase hover:text-white transition-500 text-primary-50">
          Địa điểm tổ chức
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-stretch p-px mb-4 w-full">
        {/* table */}
        <div className="w-full md:w-[66.5%] p-px overflow-auto md:overflow-visible mb-[1.38rem] md:mb-0 md:mr-[1.38rem]">
          <table className="rounded-xl overflow-hidden table-auto md:outline md:outline-1 outline-primary-50 min-w-max mb-1 w-full h-full">
            <thead>
              <tr className="bg-primary-40 md:bg-linear-5">
                <th className="text-0.875 hidden md:table-cell text-white text-center md:text-1 font-semibold leading-1.3 md:leading-1.5 px-3 py-3 md:py-2 md:px-4 md:first-of-type:pl-6 md:last-of-type:pr-6 md:w-[9.125rem] border-x md:border-0 border-r-white">Ngày - Giờ</th>
                <th className="text-0.875 table-cell md:hidden text-white text-center md:text-1 font-semibold leading-1.3 md:leading-1.5 px-3 py-3 md:py-2 md:px-4 md:first-of-type:pl-6 md:last-of-type:pr-6 md:w-[9.125rem] border-x md:border-0 border-r-white">Ngày</th>
                <th className="text-0.875 block md:hidden text-white text-center md:text-1 font-semibold leading-1.3 md:leading-1.5 px-3 py-3 border-x md:border-0 border-r-white">Giờ</th>
                <th className="text-0.875 text-white text-center md:text-1 font-semibold leading-1.3 md:leading-1.5 md:w-[7rem] px-3 py-3 md:py-2 md:px-4 first-of-type:pl-6 last-of-type:pr-6  border-x md:border-0 border-r-white">Địa điểm</th>
                <th className="text-0.875 text-white text-center md:text-1 font-semibold leading-1.3 md:leading-1.5 md:w-[8.375rem] px-3 py-3 md:py-2 md:px-4 first-of-type:pl-6 last-of-type:pr-6  border-x md:border-0 border-r-white">Đất nước</th>
                <th className="text-0.875 text-white md:text-1 font-semibold leading-1.3 md:leading-1.5 px-3 py-3 md:py-2 md:px-4 first-of-type:pl-6 last-of-type:pr-6 text-center md:text-start border-x md:border-0 md:w-[27.2rem] border-r-white">Sự kiện</th>
                <th className="hidden md:table-cell text-0.875 text-white text-center md:text-1 font-semibold leading-1.3 md:leading-1.5 md:w-[9rem] px-3 py-3 md:py-2 md:px-4 first-of-type:pl-6 last-of-type:pr-6  border-x md:border-0 border-r-white">Chi tiết và đăng ký</th>
                <th className="table-cell md:hidden text-0.875 text-white text-center md:text-1 font-semibold leading-1.3 md:leading-1.5 md:w-[9rem] px-3 py-3 md:py-2 md:px-4 first-of-type:pl-6 last-of-type:pr-6 border-x md:border-0 border-r-white">Chi tiết</th>
              </tr>
            </thead>
            {/* table data fetched */}
            <tbody>
              {isLoading ? tableSkeleton : (
                <>
                  {tableData?.data.map(item => {
                    return (
                      <TableRow
                        key={item.id}
                        isActive={isAfter(parse(item.date, "dd/MM/yyyy", new Date()), new Date())}
                        {...item}
                      />
                    )
                  })}
                </>
              )}
            </tbody>
          </table>
        </div>
        {/* pagination mobile */}
        {isLoading ? paginationSkeleton : (
          <div className="flex flex-row md:hidden justify-center items-center mx-auto [&_button]:mx-1">
            {tableData?.totalPage && (
              <>
                {Array.from({ length: tableData.totalPage }, (_, i) => i + 1).map(item => {
                  if (item - (page + 1) >= -2 && item - (page + 1) <= 2) {
                    return (
                      <button
                        key={item}
                        className={clsx("py-3 w-10 rounded-lg text-primary-50 text-0.875 font-bold leading-1.2 text-center outline outline-1 outline-primary-10", {
                          "bg-primary-60 text-white": page + 1 === item
                        })}
                        onClick={() => setPage(item - 1)}
                      >
                        {item}
                      </button>
                    )
                  }
                })}
              </>
            )}
          </div>
        )}
        <FindSchoolDeco />
      </div >
    </>
  )
}