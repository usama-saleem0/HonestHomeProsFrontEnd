import React, { useState } from "react";
import Header from "../components/Header_Footer/Header";
import Hero from "../components/Landing_page_components/Hero";
import WorkProcess from "../components/Landing_page_components/WorkProcess";
import Offersalider from "../components/Landing_page_components/Offersalider";
import Faq from "../components/Landing_page_components/Faq";
import Available from "../components/Landing_page_components/Available";
import Footer from "../components/Header_Footer/Footer";


const Landing = () => {




    return (
        <>
            <Header />
            <Hero />
            <WorkProcess/>
            <Offersalider/>
            <Faq/>
            <Available/>
            <Footer/>
        </>
    )



}


export default Landing