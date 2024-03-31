"use client"

import vietLang from "@/assets/image/header/vietnam-thumb.webp"
import englishLang from "@/assets/image/home/section-1/eng-thumb.webp"
import Image from "next/image"
import { changeLang } from "@/app/action"
import { useState } from "react"
import { Lang } from "@/app/type"
import { cn } from "@/utils/cn"

export default function LangSwitch() {
  const [lang, setLang] = useState<Lang>("vn")

  return (
    <>
      <div className="flex flex-row items-center ml-6">
        {/* vn btn */}
        <button
          className={cn("w-[1.125rem] h-[1.125rem] rounded-full overflow-hidden hover-opacity mr-3", {
            "grayscale": lang !== "vn"
          })}
          onClick={async () => {
            const data = await changeLang("vn")
            setLang("vn")
            alert(data.message)
          }}
        >
          <Image src={vietLang} alt="tiếng việt" className="w-full h-full object-cover" />
        </button>
        {/* en btn */}
        <button
          className={cn("w-[1.125rem] h-[1.125rem] rounded-full overflow-hidden hover-opacity", {
            "grayscale": lang !== "en"
          })}
          onClick={async () => {
            const data = await changeLang("en")
            setLang("en")
            alert(data.message)
          }}
        >
          <Image src={englishLang} alt="tiếng anh" className="w-full h-full object-cover" />
        </button>
      </div>
    </>
  )
}