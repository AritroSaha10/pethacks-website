import React from 'react';
import Layout from '../components/Layout'
import Navbar from "@components/Navbar"
import SectionHead from "@components/SectionHead"

const [day, setday]

export default function Schedule() {
    return (
        <Layout name="Schedule" noNavbar>
            <Navbar />
            <SectionHead title="Schedule" subtitle="All times are in EST!" />

        </Layout>
    )
}