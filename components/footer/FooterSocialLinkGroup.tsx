import Image from "next/image";
import youtube from "@/assets/svg/footer/footer-youtube.svg"
import facebook from "@/assets/svg/footer/footer-facebook.svg"
import X from "@/assets/svg/footer/footer-x.svg"
import Link from "next/link";
import clsx from "clsx";

interface FooterSocialLinkGroupProps {
  className: string
}

export default function FooterSocialLinkGroup({ className }: FooterSocialLinkGroupProps) {
  return (
    <div className={clsx("flex flex-row gap-3 items-center", className)}>
      <Link href="/" className="hover-opacity">
        <Image src={facebook} alt="" className="size-6" />
      </Link>
      <Link href="/" className="hover-opacity">
        <Image src={X} alt="" className="size-6" />
      </Link>
      <Link href="/" className="hover-opacity">
        <Image src={youtube} alt="" className="size-6" />
      </Link>
    </div>
  )
}