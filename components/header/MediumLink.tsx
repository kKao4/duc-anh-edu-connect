import Link from "next/link";

interface MediumLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode
}

export default function MediumLink({ children, ...props }: MediumLinkProps) {
  return (
    <Link {...props} className="text-0.875 font-bold leading-1 tracking-0.01313 uppercase text-primary-60 hover-opacity py-1.5 flex-none">
      {children}
    </Link>
  )
}