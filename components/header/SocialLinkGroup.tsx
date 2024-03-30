import Link from "next/link";
import Image from "next/image";
import headerYoutube from "@/assets/svg/header/youtube.svg"
import headerFacebook from "@/assets/svg/header/facebook.svg"
import headerX from "@/assets/svg/header/x.svg"
import clsx from "clsx";

interface SocialLinkGroupProps {
  className: string
}

export default function SocialLinkGroup({ className }: SocialLinkGroupProps) {
  return (
    <div className={clsx("flex flex-row items-center gap-3 ml-12", className)}>
      <Link href="/">
        <Image src={headerFacebook} alt="facebook-svg" className="size-6 hover-opacity" />
      </Link>
      <Link href="/">
        <Image src={headerX} alt="X-svg" className="size-6 hover-opacity" />
      </Link>
      <Link href="/">
        <Image src={headerYoutube} alt="youtube-svg" className="size-6 hover-opacity" />
      </Link>
    </div>
  )
}