"use client";

import { search } from "@/app/action";
import searchIcon from "@/assets/svg/header/search-icon.svg"
import Image from "next/image";
import { useState } from "react";

export default function SearchBox() {
  const [searchValue, setSearchValue] = useState("")

  const searchFnc = async () => {
    const data = await search()
    alert(data.message)
    setSearchValue("")
  }

  return (
    <>
      <form action={searchFnc} className="w-[28rem] flex flex-row items-stretch rounded-lg outline outline-1 outline-primary-10">
        <input
          type="text"
          placeholder="Tìm thông tin về trường, học bổng, tin tức..."
          className="text-0.875 leading-1 tracking-0.00875 flex-grow placeholder:text-gray-20 focus:outline-none pl-4 h-full"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="p-[0.62rem] flex-none bg-primary-5">
          <Image src={searchIcon} alt="tìm kiếm" className="w-[1.5rem] h-[1.5rem]"  />
        </button>
      </form>
    </>
  )
}