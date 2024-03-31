import clsx from "clsx";
import Link from "next/link";

interface FooterLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode
}

export default function FooterLink({ children, className, ...props }: FooterLinkProps) {
  return (
    <Link {...props} className={clsx("relative text-1 md:text-0.875 py-1.5 text-white font-bold leading-1 tracking-0.01313 uppercase group mb-6 last:mb-0", className)}>
      {children}
      <span className="hidden md:block absolute w-0 h-0.5 bg-white bottom-0 left-0 group-hover:w-full transition-500" />
    </Link>
  )
}