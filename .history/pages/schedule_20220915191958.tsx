import Layout from '../components/Layout'
import Navbar from "@components/Navbar"
import SectionHead from "@components/SectionHead"
import React, { useState } from 'react';

export default function Schedule() {
    const days = {
        1: "Friday", 
        2: "Saturday",
        3: "Sunday"};
    const [count, setCount] = useState(days[1]);
        function setDay({day}:{day: number}){
            setCount(days[day])
        }
    return (
        <Layout name="Schedule" noNavbar>
            <Navbar />
            <SectionHead title="Schedule" subtitle="All times are in EST!" />
            <div>{count}</div>
            <button onClick={setDay(count+1)}>Right</button>
        </Layout>
    )
}