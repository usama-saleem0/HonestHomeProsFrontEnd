import React from "react";

import Header from "../Header_Footer/Header";
import Footer from "../Header_Footer/Footer";
import { useState, useEffect } from "react";

const Howitwork = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div style={{ backgroundColor: "#F37B3C" }}>
      <>

          <Header />



        <div className="container">
        <div className="main-fotter-box-tital-list">
        <div className="footer-color-change">
        <h1 className="text-centerz" >
                Honest Home Hub: <br /> Simplifying Home Services for You
              </h1>
              <br />

              <h1>Overview</h1>
              <p style={{ fontSize: "larger" }}>
                Honest Home Hub is your go-to platform for all your home service
                needs. We make it easy for you to get multiple quotes, compare
                options, and select the best service provider for your specific
                requirements. With Honest Home Hub, you can sit back, relax, and
                let us handle the hassle of finding reliable home service
                professionals.
              </p>

              <h1>How It Works</h1>
              <p style={{ fontSize: "larger" }}>
                <br />
                <h4> Step 1: Create a Job </h4>
                <br />
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Select a Service:{" "}
                </span>
                <span>
                  Choose from a wide range of services, including plumbing,
                  cleaning, roofing, fencing, HVAC, landscaping, handyman, home
                  remodeling, and water heater services. Provide Details: Fill
                  out a simple form with details about the service you need. You
                  can even upload a picture of the area or item that needs
                  attention.
                </span>
              </p>
              <p style={{ fontSize: "larger" }}>
                <br />
                <h4> Step 2: Get Multiple Quotes </h4>
                <br />
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Receive Quotes:{" "}
                </span>
                <span>
                  Within minutes, you will receive up to three quotes from
                  verified service providers in your area. Alternatively, three
                  vendors may visit your house to provide more accurate quotes.
                </span>
                <p></p>
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Compare Options:{" "}
                </span>
                <span>
                  Compare the quotes based on price, provider ratings, and
                  customer reviews.{" "}
                </span>
              </p>

              <p style={{ fontSize: "larger" }}>
                <br />
                <h4> Step 3: Choose and Schedule </h4>
                <br />
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Select a Provider:{" "}
                </span>
                <span>
                  Choose the service provider that best meets your needs.
                </span>
                <p></p>
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Expert Advice:{" "}
                </span>
                <span>
                  If you need assistance making a decision, you have the option
                  to hire an expert through the platform to help you select the
                  best quote.{" "}
                </span>
                <p></p>
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Schedule the Service:{" "}
                </span>
                <span>
                  Pick a date and time that works for you. Our providers are
                  flexible and can accommodate your schedule.{" "}
                </span>
              </p>

              <p style={{ fontSize: "larger" }}>
                <br />
                <h4> Step 4: Secure Payment </h4>
                <br />
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Payment in Escrow:{" "}
                </span>
                <span>
                  Pay securely through the platform. Your payment goes into an
                  escrow account and will only be released to the service
                  provider once the job is completed to your satisfaction.{" "}
                </span>
                <p></p>
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Quality Assurance:{" "}
                </span>
                <span>
                  All our service providers are vetted and backed by the Honest
                  Haley Promise, ensuring high standards and reliability.{" "}
                </span>
              </p>

              <p style={{ fontSize: "larger" }}>
                <br />
                <h4> Step 5: Job Completion and Feedback </h4>
                <br />
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Inspect the Job:{" "}
                </span>
                <span>
                  Once the service is completed, inspect the work to ensure it
                  meets your expectations.{" "}
                </span>
                <p></p>
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Release Payment:{" "}
                </span>
                <span>
                  Confirm your satisfaction on the platform, and the payment
                  will be released from escrow to the service provider.{" "}
                </span>
                <p></p>
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Rate and Review:{" "}
                </span>
                <span>
                  After the service is completed, rate your service provider and
                  leave a review. Your feedback helps us maintain high standards
                  and improve our services.{" "}
                </span>
              </p>
              <br />
              <h1>Benefits for Customers</h1>

              <p style={{ fontSize: "larger" }}>
                <br />

                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Convenience:{" "}
                </span>
                <span>Get multiple quotes with just one picture. </span>
                <p></p>
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Transparency:{" "}
                </span>
                <span>
                  Compare quotes and choose the best option based on price and
                  reviews.{" "}
                </span>
                <p></p>
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Reliability:{" "}
                </span>
                <span>
                  All service providers are vetted and backed by the Honest
                  Haley Promise. Security: Secure and hassle-free payment
                  options with escrow protection.{" "}
                </span>
                <p></p>
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Expert Assistance:{" "}
                </span>
                <span>
                  Option to hire an expert to help make informed decisions.{" "}
                </span>
                <p></p>
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Satisfaction Guaranteed:{" "}
                </span>
                <span>
                  If you’re not happy with the service, you get your money back
                  and a free cleaning.{" "}
                </span>
              </p>

              <br />
              <h1>Contact Us</h1>
              <p style={{ fontSize: "larger" }}>
                <br />

                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Website:{" "}
                </span>
                <a href="#">honesthomehub.com</a>

                <p></p>
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Phone:{" "}
                </span>
                <a href="#">469-223-3255</a>

                <p></p>
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Email:{" "}
                </span>
                <a href="#">dylansloan@honesthomehub.com </a>

                <p></p>
                <p style={{ fontSize: "larger" }}>
                  Sign up on Honest Home Hub today and take the stress out of
                  home maintenance!
                </p>
              </p>


            </div>
          </div>
        </div>


        <div className="footer-list-footer-box">
  <Footer/>
</div>

      </>
    </div>
  );
};

export default Howitwork;
