import Layout from '../components/Layout'
import Navbar from "@components/Navbar"
import SectionHead from "@components/SectionHead"
import React, { useState } from 'react';

export default function Schedule() {
    const days = {
        1: "Friday", 
        2: "Saturday",
        3: "Sunday"};
    const [count, setCount] = useState(1);
    function setDay(){
        count < 4 ? setCount(count+1) : false;
    }
    return (
        <Layout name="Schedule" noNavbar>
            <Navbar />
            <SectionHead title="Schedule" subtitle="All times are in EST!" />
            <div>{count}</div>
            <button onClick={}>Right</button>
        </Layout>
    )
}