import Head from "next/head"

import Navbar from "./Navbar"
import Footer from "./Footer"

import { m } from "framer-motion"

const transition = { ease: [0.6, 0.01, -0.05, 0.9] };

const contentVariants = {
    initial: { y: 200, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -200, opacity: 0 },
    transition: { duration: 0.4, ...transition }
}

export default function Layout({ name, children, noAnim, noNavbar }: { name: string, children: any, noAnim?: boolean, noNavbar?: boolean }) {
    const title = `${name} | PetHacks`;
    const description = "WEBSITE DESCRIPTION";
    const imageSrc = "CHANGE ME"

    return (
        <div className="flex flex-col min-h-screen bg-orange-100 overflow-hidden" key={name}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={imageSrc} />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1111" />
                <meta property="og:image:height" content="1111" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@YOUR_TWITTER" />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image:src" content={imageSrc} />
            </Head>

            {noNavbar ? <></> : <Navbar />}

            {noAnim ? (
                <div
                    className="flex-grow flex flex-col"
                >
                    {children}
                </div>
            ) : (
                <m.div
                    initial={contentVariants.initial}
                    animate={contentVariants.animate}
                    exit={contentVariants.exit}
                    transition={contentVariants.transition}
                    className="flex-grow flex flex-col svg-background"
                >
                    {children}
                </m.div>
            )}

            <Footer />
        </div>
    )
}