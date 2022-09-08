import Image from "next/image"

import HeroImage from "@media/hero-pic.png"

export default function Hero() {
    return (
        <Image src={HeroImage} alt="hero image" />
    )
}