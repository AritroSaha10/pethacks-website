import Image from "next/image"

import Layout from "@components/Layout"
import PageContainer from "@components/PageContainer"
import PageHeader from "@components/PageHeader"

import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { MdWeb } from "react-icons/md"
import classArrayToString from "@util/styles/classNames"
import { getAllDocuments } from "@lib/sanity/util"
import { NextPage } from "next"

import client from "../lib/sanity";
import { useNextSanityImage } from "next-sanity-image";

import { SanityReference } from "@sanity/image-url/lib/types/types";

interface TeamMemberData {
    position: string,
    rank: "Lead Organizer" | "Director" | "Executive",
    name: string,
    image: SanityReference
    links?: {
        url: string,
        website: "GitHub" | "Instagram" | "LinkedIn" | "Website"
    }[]
};

interface TeamInfo {
    leadOrganizers: TeamMemberData[],
    directors: TeamMemberData[],
    executives: TeamMemberData[]
}

const iconMapping = {
    "GitHub": <FaGithub className="text-2xl text-gray-800 hover:text-gray-600 duration-150" title="GitHub" />,
    "Instagram": <FaInstagram className="text-2xl text-gray-800 hover:text-gray-600 duration-150" title="Instagram" />,
    "LinkedIn": <FaLinkedin className="text-2xl text-gray-800 hover:text-gray-600 duration-150" title="LinkedIn" />,
    "Website": <MdWeb className="text-2xl text-gray-800 hover:text-gray-600 duration-150" title="Website" />
}

const TeamMember = ({ name, position, image, links }: TeamMemberData) => {
    // Prepare next.js image from sanity CMS
    const imageProps = useNextSanityImage(
        client,
        image
    );

    links = links ?? [];

    return (
        <div className="flex flex-col items-center text-center max-w-sm">
            <Image
                {...imageProps}
                height={200}
                width={200}
                objectFit="cover"
                objectPosition="center"
                alt="Photo"
                className="rounded-full"
                placeholder="blur"
            />
            <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
            <h1 className="text-2xl font-semibold text-gray-500 mb-1">{position}</h1>

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

export async function getStaticProps({ preview = false }) {
    const teamRaw = await getAllDocuments("team", true, preview) as TeamMemberData[];

    const team: TeamInfo = {
        leadOrganizers: teamRaw.filter(({ rank }) => rank === "Lead Organizer"),
        directors: teamRaw.filter(({ rank }) => rank === "Director"),
        executives: teamRaw.filter(({ rank }) => rank === "Executive")
    }

    return {
        props: {
            team
        },
        revalidate: 5
    };
}

interface PageProps {
    team: TeamInfo
}

const TeamPage: NextPage<PageProps> = ({ team }) => {
    return (
        <Layout name="Team">
            <section>
                <PageHeader title="Team" topSubtitle="The people behind it all" />

                <PageContainer className="flex flex-col gap-12">
                    <div>
                        <h2 className={classArrayToString([
                            "text-center",
                            "text-2xl lg:text-4xl",
                            "font-semibold text-pet-teal",
                            "mb-4"
                        ])}>Lead Organizers</h2>
                        <div className="flex flex-wrap gap-8 lg:gap-x-16 xl:gap-x-24 items-center justify-center w-full">
                            {team.leadOrganizers.map(member => <TeamMember {...member} key={member.name} />)}
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
                            {team.directors.map(member => <TeamMember {...member} key={member.name} />)}
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
                            {team.executives.map(member => <TeamMember {...member} key={member.name} />)}
                        </div>
                    </div>
                </PageContainer>
            </section>
        </Layout>
    )
}

export default TeamPage
