import Link from "next/link";

interface SmallLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode
}

export default function SmallLink({ children, ...props }: SmallLinkProps) {
  return (
    <Link {...props} className="px-2 py-[0.62rem] capitalize tracking-0.0075 leading-1 font-bold text-0.75 text-primary-60 hover-opacity">
      {children}
    </Link>
  )
}