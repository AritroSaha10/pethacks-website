import React from "react"
import Image from 'next/image'
import { m } from "framer-motion"

import Logo from "@media/logo.png"

export default function About() {
    return (
        <section className="flex p-10 flex-col items-center lg:flex-row lg:p-20 xl:px-40 items-left bg-orange-200 gap-6 z-[30] py-0" id="about">
            <div
                className="flex flex-col items-center lg:items-start w-4/5 text-center lg:text-left mb-4 lg:mb-0"
            >
                <h1 className="text-gray-800 font-bold text-3xl md:text-4xl">Stuff <span className='text-teal-700'>and</span> things</h1>
                <p className="mt-4 w-full md:w-3/4 text-lg text-gray-700">
                    PetHacks is a really cool hackathon. Join it fr (for real)
                </p>

                <p className='mt-4 w-full md:w-3/4 text-lg text-gray-700'>
                    more info
                </p>
            </div>

            <div 
                className="flex p-0 m-0 w-1/2 md:w-1/4"
            >
                <div className='flex ring-8 ring-pet-teal rounded-full'>
                    <Image className="rounded-full" src={Logo} alt="Logo" objectFit="cover" objectPosition="center" width={540} height={540} quality={100} placeholder="blur" />
                </div>
            </div>
        </section>
    )
}