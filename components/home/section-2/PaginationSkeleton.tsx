export default function PaginationSkeleton() {
  return (
    <div className="flex flex-row md:hidden justify-center items-center mx-auto gap-2">
      <div className="w-10 h-[2.55rem] bg-neutral-300 rounded-lg animate-pulse" />
      <div className="w-10 h-[2.55rem] bg-neutral-300 rounded-lg animate-pulse" />
      <div className="w-10 h-[2.55rem] bg-neutral-300 rounded-lg animate-pulse" />
    </div>
  )
}