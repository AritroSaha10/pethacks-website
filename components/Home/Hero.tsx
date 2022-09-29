import Image from "next/future/image"

import HeroImage from "@media/hero-pic.png"
import HeroImageWithText from "@media/hero-pic-with-text.png"
import Link from "next/link"

export default function Hero() {
    return (
        <div className="h-[55vw] relative">
            <Image
                src={HeroImage}
                placeholder="blur"
                alt="Hero Image"
                className="absolute selectDisable"
                quality={100}
                priority
            />

            <div className="relative">
                {/* 
                Top 10 reasons why I hate web development, by Aritro
                #1: This. The styling. Using viewport width for everything. The font size, the top position, everything. THIS WORKS!!!
                HAVING IT USE THE VIEWPORT HEIGHT DOESN'T WORK PROPERLY!!! there is probably some reason i am overlooking but this was
                dumb enough that I decided to write 4 lines of comments. 
                */}
                <div className="text-[13vw] text-pet-teal font-semibold leading-none tracking-tight">
                    <h1 className="top-[6vw] left-[11vw] absolute ">PET</h1>
                    <h1 className="text-[13vw] top-[16vw] left-[11vw] absolute">HACKS</h1>
                    <h1 className="text-[13vw] top-[27vw] left-[11vw] absolute">2023</h1>
                </div>

                <Link href="/sign-up">
                    <a className="text-[4vw] top-[40vw] left-[12vw] lg:left-[14vw] absolute bg-teal-700 text-white px-4 md:px-8 lg:px-14 -rotate-3 rounded-3xl hover:shadow-xl active:bg-teal-900 duration-150 transition-shadows">
                        Sign up
                    </a>
                </Link>
            </div>
        </div>
    )
}