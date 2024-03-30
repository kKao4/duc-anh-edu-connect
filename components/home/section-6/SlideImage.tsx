import Image, { StaticImageData } from "next/image"
import { useState } from "react"

export default function SlideImage({ src }: { src: string | StaticImageData }) {
  const [isLoadComplete, setIsLoadComplete] = useState(false)
  return (
    <Image
      src={isLoadComplete ? src : ""}
      alt=""
      className="section-6-image-slide"
      onLoad={() => setIsLoadComplete(true)}
    />
  )
}