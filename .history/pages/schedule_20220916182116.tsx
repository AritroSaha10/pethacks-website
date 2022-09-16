import Layout from '../components/Layout'
import Navbar from "@components/Navbar"
import SectionHead from "@components/SectionHead"
import React, { useState } from 'react';

export default function Schedule() {
    // Ignore just messing around with something 
    // interface defineDay{
    //     1: String, 
    //     2: String,
    //     3: String
    // };
      
    // let days = {
    //     1: "Friday",
    //     2: "Saturday",
    //     3: "Sunday"
    // }
    // const [count, setCount] = useState(1);
    // function setDay(){
    //     count < 3 ? setCount(count+1) : false;
    // }
    // function removeDay(){
    //     count > 1 ? setCount(count-1) : false;
    // }
    return (
        <Layout name="Schedule" noNavbar>
            <Navbar />
            <SectionHead title="Schedule" subtitle="All times are in EST!" />
            <div></div>
        </Layout>
    )
}