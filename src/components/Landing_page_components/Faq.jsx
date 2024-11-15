import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const Faq = () => {
  const [faqOpen, setFaqOpen] = useState(Array(5).fill(false));

  const faqtoggle = (index) => {
    const newFaqOpen = faqOpen.map((item, i) => (i === index ? !item : item));
    setFaqOpen(newFaqOpen);
  };

  const faqarray = [
    {
      question: "What is Honest Home Hub?",
      answer:
        "Honest Home Hub is a platform designed to help homeowners with all their home service needs, whether they are dealing with an emergency or looking to get multiple quotes from different vendors. We offer services such as plumbing, cleaning, roofing, fencing, HVAC, landscaping, handyman services, home remodeling, and water heater services.",
    },
    {
      question: "How does Honest Home Hub work?",
      answer:
        "Customers post jobs on Honest Home Hub, at which point vendors can give a free quote immediately on cleaning/landscaping/go out to the house and give quotes back to the platform on all the other jobs. Giving quotes is free and we only charge on actual sales insuring we only make money when you make money.",
    },
    {
      question: "How can I join Honest Home Hub as a service provider?",
      answer:
        "To become a vendor on Honest Home Hub, simply sign up on our platform, complete the registration process, and provide the required information about your services. Once verified, you can start receiving job requests from customers in your area.",
    },
    {
      question: "What are the requirements for becoming a vendor on Honest Home Hub?",
      answer:
        "We require vendors to meet our quality standards and provide proof of experience in their respective service fields. Additional requirements may vary based on the type of service offered. Contact us for more details on specific criteria. We require insurance for all vendors.",
    },
    {
      question: "How does Honest Home Hub help me get more clients?",
      answer:
        "Honest Home Hub connects you with customers actively seeking home services. Our platform allows customers to request quotes, view your ratings and reviews, and choose trusted providers, giving you greater exposure and increasing your chances of landing jobs.",
    },
  ];
  return (
    <section className="faq-sec">
      <div className="container">

 
      <div className="faq-main-sec-h">
   
          <div className="faq-cont-h">
            <div className="faq-title-h">
              <h1>Frequently Asked Questions</h1>
              <div className="faq-title-text-h">
                <p>
                  At Honest Home Hub, we strive to make your home service
                  experience as smooth and hassle-free as possible. Whether
                  you're dealing with an emergency repair or planning a home
                  improvement project, we connect you with trusted service
                  providers who can get the job done efficiently and
                  effectively. Below are some common questions to help you
                  understand how our platform works and how we can assist with
                  your home service needs.
                </p>
              </div>
            </div>

            <div className="faq-question-h">
              {faqarray.map((item, index) => (
                <div className="asd">
                  <div
                    key={index}
                    onClick={() => faqtoggle(index)}
                    className={`faq-question-cont-h ${
                      faqOpen[index] ? "faq-bg" : ""
                    }`}

                    //   className="faq-question-cont-h"
                  >
                    <div className="accordion-cont-h">
                      <h3>{item.question}</h3>
                      <h3
                        className={`${
                          faqOpen[index] ? "faq-question-cont-h-alt-h3" : ""
                        }`}
                      >
                        {faqOpen[index] ? "-" : "+"}
                      </h3>
                    </div>
                  </div>
                  <AnimatePresence>
                    {faqOpen[index] && (
                      <motion.div
                        initial="collapsed"
                        animate={faqOpen[index] ? "open" : "collapsed"}
                        exit="collapsed"
                        variants={{
                          open: {
                            opacity: 1,
                            height: "auto",
                          },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.04, 0.62, 0.23, 1],
                        }}
                        className="home-faq-drop-h"
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
     
      </div>

      </div>
    </section>
  );
};

export default Faq;
