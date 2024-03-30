import dynamic from "next/dynamic"
import Heading1 from "@/components/typography/Heading1"
import Heading3 from "@/components/typography/Heading3"
const DynamicTable = dynamic(() => import("./Table"))

export default function Section2() {

  return (
    <section className="w-[92%] mx-auto mb-12">
      <Heading3>theo dõi ngay</Heading3>
      <Heading1>Lịch hội thảo - Triển lãm du học</Heading1>
      <DynamicTable />
    </section>
  )
}

