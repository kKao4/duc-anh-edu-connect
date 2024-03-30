import Section1 from "@/components/home/section-1";
import Section2 from "@/components/home/section-2";
import { Suspense } from "react";
import Section6 from "@/components/home/section-6";
import Section3 from "@/components/home/section-3";
import Section7 from "@/components/home/section-7";
import Section4 from "@/components/home/section-4";
import Section5 from "@/components/home/section-5";

// TODO: optimize image

export default function Home() {
  return (
    <>
      <Section1 />
      <Suspense>
        <Section2 />
        <Suspense>
          <Section3 />
          <Suspense>
            <Section4 />
            <Suspense>
              <Section5 />
              <Suspense>
                <Section6 />
                <Suspense>
                  <Section7 />
                </Suspense>
              </Suspense>
            </Suspense>
          </Suspense>
        </Suspense>
      </Suspense>
    </>
  );
}
