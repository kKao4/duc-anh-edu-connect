import Heading1 from "@/components/typography/Heading1"
import Heading3 from "@/components/typography/Heading3"
import Table from "./Table"
import TableSkeleton from "./TableSkeleton"
import PaginationSkeleton from "./PaginationSkeleton"

export default function Section2() {
  return (
    <section className="w-[92%] mx-auto mb-12">
      <Heading3>theo dõi ngay</Heading3>
      <Heading1>Lịch hội thảo - Triển lãm du học</Heading1>
      <Table tableSkeleton={<TableSkeleton />} paginationSkeleton={<PaginationSkeleton />} />
    </section>
  )
}

