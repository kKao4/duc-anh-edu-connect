export default function PaginationSkeleton() {
  return (
    <div className="flex md:hidden justify-center items-center w-full mt-4">
      <div className="w-[2.625rem] h-[2.625rem] rounded-lg bg-neutral-300 animate-pulse mr-3" />
      <div className="w-[2.625rem] h-[2.625rem] rounded-lg bg-neutral-300 animate-pulse" />
    </div>
  )
}