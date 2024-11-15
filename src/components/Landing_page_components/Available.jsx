import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import googlepay from "../../assets/Images/googlepay.png";
import appstore from "../../assets/Images/appstore.png";
import Availableimg from "../../assets/Images/Availableimg.png";
const Available = () => {


  return (
    <>
    <section className="Available">
      <div className="container">
        <div className="main-Available">
          <div className="Available-img-box">
            <img src={Availableimg} alt="" />
          </div>

          <div className="Available-tital-box">
            <h2>This App is Available for Your
            Smart Phone.</h2>
            <p>Access Honest Home Hub conveniently from your smartphone to manage all your home service needs on the go. Whether you're at home, at work, or on the move, our app allows you to quickly create job requests, receive multiple quotes, and schedule services with ease. Download the app today to experience the ultimate convenience in home services, right at your fingertips.</p>

            <div className="google-pay-btn-box">
              <button><img src={googlepay} alt="" /></button>
              <button><img src={appstore} alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Available;
