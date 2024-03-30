import clsx from "clsx"

interface Heading1Props extends React.ComponentProps<"h1"> {
  children: React.ReactNode
}

export default function Heading1({ children, className, ...props }: Heading1Props) {
  return (
    <h1 {...props} className={clsx("text-[1.75rem] md:text-3 font-extrabold leading-1.3 md:leading-1.2 tracking-0.00375 text-primary-60 mb-4 md:mb-12", className)}>
      {children}
    </h1>
  )
}