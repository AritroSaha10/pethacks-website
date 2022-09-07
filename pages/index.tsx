import type { NextPage } from 'next'
import Layout from '../components/Layout'

import FAQ, { FrequentlyAskedQuestion } from "@components/Home/FAQ"

import { getAllDocuments } from "@lib/sanity/util"

interface HomeProps {
  faq: FrequentlyAskedQuestion[]
}

export async function getStaticProps({ preview = false }) {
  const faq = await getAllDocuments("faq", true, preview) as FrequentlyAskedQuestion[];

  return {
    props: {
      faq,
    },
    revalidate: 5
  };
}

const Home: NextPage<HomeProps> = ({ faq }) => {
  return (
    <Layout name="Home">
      <FAQ faq={faq} />
    </Layout>
  )
}

export default Home
