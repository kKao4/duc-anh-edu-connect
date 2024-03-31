import Heading1 from "@/components/typography/Heading1"
import Section5News from "./Section5News";
import NewsSkeleton from "./NewsSkeleton";
import PaginationSkeleton from "./PaginationSkeleton";

export default function Section5() {
  return (
    <section className="mx-auto w-[92%] mb-8 md:mb-24">
      <Heading1 className="mb-[1.38rem] md:mb-6">Tin tức du học</Heading1>
      <Section5News newsSkeleton={<NewsSkeleton />} paginationSkeleton={<PaginationSkeleton />} />
    </section>
  )
}