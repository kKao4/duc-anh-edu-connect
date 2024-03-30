"use client"

export default function ScrollToTopButton() {
  return (
    <button
      className="flex flex-none flex-row items-center gap-[0.62rem] text-white text-0.875 md:text-0.75 font-semibold md:font-bold leading-1.5 md:leading-1 tracking-0.0075 capitalize"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Back to top
      <svg className="size-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 16L12 9L19 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}