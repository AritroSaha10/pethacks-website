import { motion } from "framer-motion";
import React from 'react'
import Image from 'next/image'

type HomeProps = {
    title: string;
    description: string;
    image: string;
}

export const About = (props: HomeProps) => {
    return (
        <section>
            <div>
                <h1 className="text-6xl font-bold">{props.title}</h1>
                <h2 className="text-3xl font-bold">{props.description}</h2>
            </div>
            <Image
                src={props.image}
                alt="image"
                className=""
            />
        </section>

    )
}