import Layout from '../components/Layout'
import Navbar from "@components/Navbar"
import SectionHead from "@components/SectionHead"

export default function Schedule() {
    return (
        <Layout name="Schedule" noNavbar>
            <Navbar />
            <SectionHead title="Schedule" subtitle />
        </Layout>
    )
}