import { createPortal } from "react-dom";

export default function PaginationMobile() {
  return (
    <>
      {createPortal(<div className="section-6-pagination" />, document.getElementById("section-6-slide-pagination-container") ?? document.body)}
    </>
  )
}