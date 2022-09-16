import React, {useState} from 'react';
import Layout from '../components/Layout'
import Navbar from "@components/Navbar"
import SectionHead from "@components/SectionHead"

const [day, setDay] = useState(0);

const days = {
    0: "friday",
    1: "Saturday",
    2: "Sunday"
}

function getDay(){
    setDay(day+1);
}

export default function Schedule() {
    return (
        <Layout name="Schedule" noNavbar>
            <Navbar />
            <SectionHead title="Schedule" subtitle="All times are in EST!" />
            <p>{getDay()}</p>
            <button onClick={}>next</button>
        </Layout>
    )
}