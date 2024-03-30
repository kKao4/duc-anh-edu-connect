import clsx from "clsx"

interface InformationBoxProps {
  title: string,
  text: string,
  translateY: "full" | "half"
}

export default function InformationBox({ text, title, translateY }: InformationBoxProps) {
  return (
    <div className={clsx("w-[16.375rem] h-[14.0625rem] rounded-2xl bg-white", {
      "-translate-y-full": translateY === "full",
      "-translate-y-1/2": translateY === "half"
    })} style={{ boxShadow: "0px 3px 24px 0px rgba(0, 132, 255, 0.04), 0px 0px 32px 0px rgba(0, 119, 229, 0.04)" }}>
      <div className="mt-[6.31rem] ml-[1.56rem]">
        <h2 className="text-3.75 font-extrabold leading-1.3 -tracking-0.1875 w-fit bg-linear-4 bg-clip-text text-transparent">{title}</h2>
        <strong className="text-1 font-extrabold leading-1.3 -tracking-0.02 bg-linear-4 bg-clip-text text-transparent">{text}</strong>
      </div>
    </div>
  )
}