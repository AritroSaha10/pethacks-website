import React, {useState} from 'react';
import Layout from '../components/Layout'
import Navbar from "@components/Navbar"
import SectionHead from "@components/SectionHead"

const [day, setDay] = useState(0);
const days = {
    0: "friday",
    
}

export default function Schedule() {
    return (
        <Layout name="Schedule" noNavbar>
            <Navbar />
            <SectionHead title="Schedule" subtitle="All times are in EST!" />

        </Layout>
    )
}