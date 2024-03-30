import clsx from "clsx"

interface Heading3Props extends React.ComponentProps<"h3"> {
  children: React.ReactNode
}

export default function Heading3({ children, className, ...props }: Heading3Props) {
  return (
    <h3 {...props} className={clsx("text-grayscaletext-40 text-1 font-bold uppercase", className)}>{children}</h3>
  )
}