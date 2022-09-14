import type { NextPage } from 'next'
import Layout from '../components/Layout'

import FAQ, { FrequentlyAskedQuestion } from "@components/Home/FAQ"

import { getAllDocuments } from "@lib/sanity/util"
import Sponsors, { SponsorList, SponsorData } from '@components/Home/Sponsors'
import Hero from '@components/Home/Hero'

import Navbar from "@components/Navbar"
import About from '@components/Home/About'
import CountdownTimer from '@components/Home/CountdownTimer'

interface HomeProps {
  faq: FrequentlyAskedQuestion[],
  sponsors: SponsorList
}

export async function getStaticProps({ preview = false }) {
  const faq = await getAllDocuments("faq", true, preview) as FrequentlyAskedQuestion[];
  const sponsorsRaw = await getAllDocuments("sponsor", true, preview) as SponsorData[];

  const sponsors: SponsorList = {
      gold: sponsorsRaw.filter(({ tier }) => tier === "gold"),
      silver: sponsorsRaw.filter(({ tier }) => tier === "silver"),
      bronze: sponsorsRaw.filter(({ tier }) => tier === "bronze"),
      none: sponsorsRaw.filter(({ tier }) => tier === "none")
  };

  return {
    props: {
      faq,
      sponsors
    },
    revalidate: 5
  };
}

const Home: NextPage<HomeProps> = ({ faq, sponsors }) => {
  return (
    <Layout name="Home" noNavbar>
      <Hero />
      <Navbar />
      <About />
      <FAQ faq={faq} />
      <Sponsors sponsors={sponsors} />
      <CountdownTimer />
    </Layout>
  )
}

export default Home
