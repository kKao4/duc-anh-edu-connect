"use client"

import { section4Tabs } from "@/constant/home/section-4"
import { useState } from "react"
import TabButton from "./TabButton"
import TabContentMobile from "./TabContentMobile"

export default function MobileTabs() {
  const [activeTab, setActiveTab] = useState<string>("Tư vấn & hướng dẫn")
  return (
    <>
      {section4Tabs.map((item, i) => {
        return (
          <>
            <TabButton
              isActive={activeTab === item.text}
              text={item.text}
              styleTitle={i === 0 ? { maxWidth: "70%" } : undefined}
              handleOnClick={() => setActiveTab(item.text)}
            />
            {i % 2 === 1 && (
              <>
                <TabContentMobile caretPosition="left" isActive={activeTab === section4Tabs[i - 1].text}>
                  {section4Tabs[i - 1].content}
                </TabContentMobile>
                <TabContentMobile caretPosition="right" isActive={activeTab === section4Tabs[i].text}>
                  {section4Tabs[i].content}
                </TabContentMobile>
              </>
            )}
          </>
        )
      })}
    </>
  )
}