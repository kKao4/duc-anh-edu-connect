"use client"

import { section4Tabs } from "@/constant/home/section-4"
import Union from "./Union"
import { useState } from "react"

export default function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  return (
    <>
      {section4Tabs.map((item, i) => {
        return (
          <Union
            key={item.text}
            isActive={activeTabIndex === i}
            style={{ top: `calc(7rem - ${i}*2.5rem)`, left: `calc(13% * ${i})` }}
            handleOnClick={() => setActiveTabIndex(i)}
            content={item.content}
            styleText={i === 0 ? { maxWidth: "28%" } : undefined}
          >
            {item.text}
          </Union>
        )
      })}
    </>
  )
}