import { useRef } from "react"
import Image from 'next/image'
import { m, useInView } from "framer-motion"

import Logo from "@media/logo.png"

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <m.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}>
            <section className="flex p-10 flex-col items-center lg:flex-row lg:p-20 xl:px-40 items-left bg-orange-200 gap-6 z-[30] py-0 svg-background" id="about">
                <div
                    className="flex flex-col items-center lg:items-start w-4/5 text-center lg:text-left mb-4 lg:mb-0 font-bold"
                >
                    <h1 className="pt-4 text-gray-800 font-bold text-3xl md:text-6xl underline">about us</h1>
                    <p className="mt-4 w-full md:w-3/4 text-2xl text-gray-700">
                        Pethacks is a 36-hour student-led hackathon wanting to bring light to the cute furry animals that everyone loves! We invite you to create a project to show your love for pets and animals!</p>
                    <p className='mt-4 w-full md:w-3/4 text-2xl text-gray-700'>
                        We welcome all highschool students and beyond, to join us at the hackathon on [date].                </p>
                </div>

                <div
                    className="flex p-0 m-0 w-1/2 md:w-1/4 pb-8 transition duration-500 hover:scale-125"
                >
                    <div className='flex ring-8 ring-pet-teal rounded-full'>
                        <Image className="rounded-full" src={Logo} alt="Logo" objectFit="cover" objectPosition="center" width={540} height={540} quality={100} placeholder="blur" />
                    </div>
                </div>
            </section>
        </m.section>
    )
}