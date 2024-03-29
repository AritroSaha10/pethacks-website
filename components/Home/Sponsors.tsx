import Image from 'next/image'

import client from "../../lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import { SanityReference } from "@sanity/image-url/lib/types/types";

export interface SponsorData {
    name: string,
    link: string,
    tier: string,
    image: SanityReference,
    imageHeight: number
}

export interface SponsorList {
    gold: SponsorData[],
    silver: SponsorData[],
    bronze: SponsorData[],
    none: SponsorData[]
}

const SponsorCard = ({ name, link, image, imageHeight }: SponsorData) => {
    // Prepare next.js image from sanity CMS
    const sanityImageProps = useNextSanityImage(
        client,
        image
    );

    return (
        <a href={link} target="_blank" rel="noreferrer" className='hover:scale-110 transition-all duration-150'>
            <Image {...sanityImageProps} alt={name} height={imageHeight} width={sanityImageProps.width / sanityImageProps.height * imageHeight} className="transition-all duration-150" quality={100} />
        </a>
    )
}

export default function Sponsors({ sponsors }: { sponsors: SponsorList }) {
    return (
        <section className="flex flex-col p-10 items-center md:py-16 md:p-20 lg:px-32 xl:px-40 items-left bg-orange-200 z-30 wiggles-background" id="sponsors">
            <div className="flex flex-col text-center mb-8">
                <span className="text-xl text-gray-500 font-semibold">making it possible</span>
                <h1 className="text-5xl text-gray-800 font-bold underline">sponsors</h1>
            </div>

            <div className='flex flex-col gap-12 w-full items-center'>
                <p className="text-xl font-semibold text-gray-700">coming soon :&#41;</p>
                {sponsors.gold.length > 0 && (
                    <div className='flex flex-wrap gap-6 lg:gap-12 items-center justify-center'>
                        {sponsors.gold.map((data: SponsorData) => <SponsorCard {...data} key={data.name} imageHeight={140} />)}
                    </div>
                )}

                {sponsors.silver.length > 0 && (
                    <div className='flex flex-wrap gap-6 items-center justify-center'>
                        {sponsors.silver.map((data: SponsorData) => <SponsorCard {...data} key={data.name} imageHeight={120} />)}
                    </div>
                )}

                {sponsors.bronze.length > 0 && (
                    <div className='flex flex-wrap gap-6 items-center justify-center'>
                        {sponsors.bronze.map((data: SponsorData) => <SponsorCard {...data} key={data.name} imageHeight={100} />)}
                    </div>
                )}

                {/*sponsors.none.length ? (
                    <div className='flex flex-wrap gap-6 items-center justify-center'>
                        {sponsors.none.map((data: SponsorData) => <SponsorCard {...data} key={data.name} imageHeight={80} />)}
                    </div>
                ) : <></>*/}
            </div>
        </section>
    )
}