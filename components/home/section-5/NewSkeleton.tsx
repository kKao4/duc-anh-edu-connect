export default function NewSkeleton() {
  return (
    <div className="flex flex-row w-full md:bg-transparent bg-white md:p-0 p-4 shadow-fourth md:shadow-none rounded-xl">
      <div className="flex-none w-[9.19rem] h-[6.0625rem] md:w-[11.9375rem] md:h-[7.875rem] rounded-lg bg-neutral-300 animate-pulse mr-3 md:mr-6" />
      <div className="flex flex-col w-full">
        <div className="flex flex-col mb-4 mb:mb-3">
          <div className="w-full h-6 rounded-lg bg-neutral-300 animate-pulse mb-1.5" />
          <div className="w-full h-6 rounded-lg bg-neutral-300 animate-pulse" />
        </div>
        <div className="w-1/2 h-6 rounded-lg bg-neutral-300 animate-pulse" />
      </div>
    </div>
  )
}