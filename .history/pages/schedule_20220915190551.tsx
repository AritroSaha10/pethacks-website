import Layout from '../components/Layout'
import Navbar from "@components/Navbar"
import SectionHead from "@components/SectionHead"
import React, { useState } from 'react';

export default function Schedule() {
    const days = ["Friday", "Saturday", "Sunday"];
    const [count, setCount] = useState(0);

    return (
        <Layout name="Schedule" noNavbar>
            <Navbar />
            <SectionHead title="Schedule" subtitle="All times are in EST!" />
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Rght</button>
        </Layout>
    )
}