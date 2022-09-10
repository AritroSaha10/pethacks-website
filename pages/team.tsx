import Image from "next/image"

import Layout from "@components/Layout"
import PageContainer from "@components/PageContainer"
import PageHeader from "@components/PageHeader"

import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { MdWeb } from "react-icons/md"
import classArrayToString from "@util/styles/classNames"

interface TeamMemberData {
    position: string,
    name: string,
    // image: SanityReference
    image: string,
    links?: {
        url: string,
        website: "GitHub" | "Instagram" | "LinkedIn" | "Website"
    }[]
};

const iconMapping = {
    "GitHub": <FaGithub className="text-xl text-white hover:text-gray-300 duration-150" title="GitHub" />,
    "Instagram": <FaInstagram className="text-xl text-white hover:text-gray-300 duration-150" title="Instagram" />,
    "LinkedIn": <FaLinkedin className="text-xl text-white hover:text-gray-300 duration-150" title="LinkedIn" />,
    "Website": <MdWeb className="text-xl text-white hover:text-gray-300 duration-150" title="Website" />
}

const TeamMember = ({ name, position, image, links }: TeamMemberData) => {
    // Prepare next.js image from sanity CMS
    // const imageProps = useNextSanityImage(
    //     client,
    //     image
    // );

    links = links ?? [];

    return (
        <div className="text-center max-w-sm">
            <Image
                // {...imageProps}
                src={image}
                height={200}
                width={200}
                objectFit="cover"
                objectPosition="center"
                alt="Photo"
                className="rounded-full"
            // placeholder="blur"
            />
            <h1 className="text-3xl font-bold text-gray-800 mt-2">{name}</h1>
            <h1 className="text-xl font-semibold text-gray-500 my-1">{position}</h1>

            <div className="flex flex-wrap gap-4">
                {links.map(({ url, website }) => (
                    <a href={url} target="_blank" rel="noreferrer" key={website}>
                        {iconMapping[website]}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default function TeamPage() {
    return (
        <Layout name="Team">
            <section>
                <PageHeader title="Team" topSubtitle="The people behind it all" />

                <PageContainer>
                    <div>
                        <h2 className={classArrayToString([
                            "text-center",
                            "text-2xl lg:text-4xl",
                            "font-semibold text-pet-teal",
                            "mb-4"
                        ])}>Lead Organizers</h2>
                        <div className="flex flex-wrap gap-8 lg:gap-x-16 xl:gap-x-24 items-center justify-center w-full">
                            <TeamMember name="Aritro Saha" position="Director of Technology" image="https://i.imgur.com/SIsAcZx.jpg" />
                            <TeamMember name="Aritro Saha" position="Director of Technology" image="https://i.imgur.com/SIsAcZx.jpg" />
                            <TeamMember name="Aritro Saha" position="Director of Technology" image="https://i.imgur.com/SIsAcZx.jpg" />
                            <TeamMember name="Aritro Saha" position="Director of Technology" image="https://i.imgur.com/SIsAcZx.jpg" />
                        </div>
                    </div>

                    <div>
                        <h2 className={classArrayToString([
                            "text-center",
                            "text-2xl lg:text-4xl",
                            "font-semibold text-pet-teal",
                            "mb-4"
                        ])}>Directors</h2>
                        <div className="flex flex-wrap gap-8 lg:gap-x-16 xl:gap-x-24 items-center justify-center w-full">
                            <TeamMember name="Aritro Saha" position="Director of Technology" image="https://i.imgur.com/SIsAcZx.jpg" />
                            <TeamMember name="Aritro Saha" position="Director of Technology" image="https://i.imgur.com/SIsAcZx.jpg" />
                            <TeamMember name="Aritro Saha" position="Director of Technology" image="https://i.imgur.com/SIsAcZx.jpg" />
                            <TeamMember name="Aritro Saha" position="Director of Technology" image="https://i.imgur.com/SIsAcZx.jpg" />
                        </div>
                    </div>

                    <div>
                        <h2 className={classArrayToString([
                            "text-center",
                            "text-2xl lg:text-4xl",
                            "font-semibold text-pet-teal",
                            "mb-4"
                        ])}>Executives</h2>
                        <div className="flex flex-wrap gap-8 lg:gap-x-16 xl:gap-x-24 items-center justify-center w-full">
                            <TeamMember name="Aritro Saha" position="Director of Technology" image="https://i.imgur.com/SIsAcZx.jpg" />
                            <TeamMember name="Aritro Saha" position="Director of Technology" image="https://i.imgur.com/SIsAcZx.jpg" />
                            <TeamMember name="Aritro Saha" position="Director of Technology" image="https://i.imgur.com/SIsAcZx.jpg" />
                            <TeamMember name="Aritro Saha" position="Director of Technology" image="https://i.imgur.com/SIsAcZx.jpg" />
                        </div>
                    </div>
                </PageContainer>
            </section>
        </Layout>
    )
}