import Link from "next/link";

interface PopperLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode
}

export default function PopperLink({ children, ...props }: PopperLinkProps) {
  return (
    <li className="mb-[0.88rem] last:mb-0">
      <Link {...props} className="text-0.875 w-full block font-medium leading-1.2 text-primary-50 hover-opacity text-start">
        {children}
      </Link>
    </li>
  )
}