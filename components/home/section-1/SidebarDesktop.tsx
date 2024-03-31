import { sideBarButtons } from "@/constant/home/section-1"
import Popper from "./Popper"
import PopperLink from "./PopperLink"
import SideBarButton from "./SideBarButton"

export default function SidebarDesktop() {
  return (
    <aside className="grow flex-col outline-2 outline outline-primary-10 rounded-xl hidden md:flex flex-none mr-6">
      <strong className="font-bold text-1 leading-1.5 px-6 py-4 text-white bg-linear-5 rounded-t-xl overflow-hidden">Bạn muốn du học ở đâu?</strong>
      {/* side bar buttons */}
      <ul>
        {sideBarButtons.map((item, i) => {
          return (
            <SideBarButton
              key={item.text}
              {...item}
              canDropdown={!!item.dropdown}
              isLastChild={i === sideBarButtons.length - 1}
            >
              {item.dropdown && (
                <Popper title={item.dropdown.title}>
                  {item.dropdown.dropdowns.map(dropdownItem => {
                    return <PopperLink key={dropdownItem.text} href={dropdownItem.href}>{dropdownItem.text}</PopperLink>
                  })}
                </Popper>
              )}
            </SideBarButton>
          )
        })}
      </ul>
    </aside>
  )
}