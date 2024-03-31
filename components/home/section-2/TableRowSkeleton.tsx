export default function TableRowSkeleton() {
  return (
    <tr className="even:bg-[rgba(134,189,253,0.10)]">
      <td className="px-3 md:pl-6 md:pr-4 py-2.5">
        <div className="bg-neutral-300 w-[calc(6rem-1.25rem)] md:w-full h-6 md:h-8 rounded-lg animate-pulse" />
      </td>
      <td className="px-3 md:px-4 py-2.5">
        <div className="bg-neutral-300 w-[calc(4.38rem-1.25rem)] md:w-full h-6 md:h-8 rounded-lg animate-pulse" />
      </td>
      <td className="px-3 md:px-4 py-2.5">
        <div className="bg-neutral-300 w-[calc(5.21rem-1.25rem)] md:w-full h-6 md:h-8 rounded-lg animate-pulse" />
      </td>
      <td className="px-3 md:px-4 py-2.5">
        <div className="bg-neutral-300 w-[calc(5.57rem-1.25rem)] md:w-full h-6 md:h-8 rounded-lg animate-pulse" />
      </td>
      <td className="px-3 md:px-8 py-2.5">
        <div className="bg-neutral-300 w-[calc(22.42rem-1.25rem)] md:w-full h-6 md:h-8 rounded-lg animate-pulse" />
      </td>
      <td className="block md:hidden px-3 md:px-4 py-2.5">
        <div className="bg-neutral-300 w-[calc(6.81rem-1.25rem)] md:w-full h-6 md:h-8 rounded-lg animate-pulse" />
      </td>
    </tr>
  )
}