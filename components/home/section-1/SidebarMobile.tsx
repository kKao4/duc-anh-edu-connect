import { sideBarButtons } from "@/constant/home/section-1"
import Section1MobileLink from "./Section1MobileLink"

export default function SidebarMobile() {
  return (
      <aside className="mt-10 block md:hidden mobile-width">
      <h2 className="text-1 font-bold leading-1.3 uppercase mb-4 text-primary-60">bạn muốn du học ?</h2>
      <ul className="grid grid-cols-2 gap-2">
        {sideBarButtons.map(item => {
          return (
            <Section1MobileLink
              key={item.text}
              {...item}
            />
          )
        })}
      </ul>
    </aside>
  )
}