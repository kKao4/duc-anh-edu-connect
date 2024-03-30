import clsx from "clsx";

interface PaginationProps {
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  isLastPage: boolean | undefined
}

export default function Pagination({ page, setPage, isLastPage }: PaginationProps) {
  return (
    <>
      <button
        className={clsx("w-[2.625rem] h-[2.625rem] outlined-button group", {
          "opacity-50 pointer-events-none": page === 0
        })}
        disabled={page === 0}
        onClick={() => setPage(prevState => prevState - 1 < 0 ? 0 : prevState - 1)}
      >
        <svg width="18" height="18" className="w-[1.1rem] h-[1.1rem]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="group-hover:stroke-white transition-500" d="M11.1862 14.1048L6.08203 9.00065L11.1862 3.89648" stroke="#3468CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        className={clsx("w-[2.625rem] h-[2.625rem] outlined-button group ml-3", {
          "opacity-50 pointer-events-none": isLastPage
        })}
        disabled={isLastPage}
        onClick={() => setPage(prevState => prevState + 1)}
      >
        <svg width="18" height="18" className="w-[1.1rem] h-[1.1rem]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="group-hover:stroke-white transition-500" d="M6.8125 3.89648L11.9167 9.00065L6.8125 14.1048" stroke="#3468CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  )
}