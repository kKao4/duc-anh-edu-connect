import NewSkeleton from "./NewSkeleton";

export default function NewsSkeleton() {
  return (
    <div className="flex flex-col md:flex-row mt-6 items-stretch">
      {/* outstanding new skeleton */}
      <div className="md:w-[33.33%] p-4 md:p-6 md:outline outline-1 outline-primary-50 rounded-xl md:rounded-2xl md:bg-transparent bg-white shadow-section-5-card md:shadow-none mr-3 md:mr-6">
        <div className="flex flex-row items-center mb-4">
          <div className="w-[7.13rem] h-6 bg-neutral-300 rounded-lg animate-pulse" />
          <div className="w-[7rem] h-8 bg-neutral-300 rounded-lg animate-pulse ml-auto" />
        </div>
        <div className="flex flex-col mb-4">
          <div className="w-full h-8 bg-neutral-300 rounded-lg animate-pulse mb-2.5" />
          <div className="w-full h-8 bg-neutral-300 rounded-lg animate-pulse mb-2.5" />
          <div className="w-1/2 h-8 bg-neutral-300 rounded-lg animate-pulse" />
        </div>
        <div className="flex flex-col mb-6">
          <div className="w-full h-6 bg-neutral-300 rounded-lg animate-pulse mb-1.5" />
          <div className="w-full h-6 bg-neutral-300 rounded-lg animate-pulse mb-1.5" />
          <div className="w-1/2 h-6 bg-neutral-300 rounded-lg animate-pulse" />
        </div>
        <div className="rounded-lg h-[12.6875rem] md:h-[17.375rem] bg-neutral-300 animate-pulse" />
      </div>
      {/* news skeleton */}
      <div className="md:w-[66.67%] grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-3 md:gap-y-8">
        <NewSkeleton />
        <NewSkeleton />
        <NewSkeleton />
        <NewSkeleton />
        <NewSkeleton />
        <NewSkeleton />
        <NewSkeleton />
        <NewSkeleton />
      </div>
    </div>
  )
}