import React, { useState } from "react";

import heroimg from "../../assets/Images/heroimg.png";
const Hero = () => {




    return (
        <>
            <section className="Hero">
                <div className="container">
                    <div className="main-Hero-box">
                        <div className="Hero-tital-box">
                            <h2> Honest Home Hub for Home Service Companies and Professionals</h2>
                            <p>Join Honest Home Hub and connect with homeowners in need of reliable service providers like you. Get access to a steady stream of clients, manage quotes easily, and build your business through our trusted platform. We handle the hassle so you can focus on what you do best – delivering quality service.</p>

                            {/* <button>Apply Filter</button> */}
                        </div>

                        <div className="Hero-img-box">
                            <img src={heroimg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )



}


export default Hero