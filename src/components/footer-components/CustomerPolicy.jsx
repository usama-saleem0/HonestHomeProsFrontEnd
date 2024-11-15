import React from "react";
import Header from "../Header_Footer/Header";
import Footer from "../Header_Footer/Footer";
import { useState, useEffect } from "react";

const CustomerPolicy = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div style={{ backgroundColor: "#F37B3C" }}>
      <>



        <Header />



        <div className="container">
          <div className="main-fotter-box-tital-list">
            <div className="footer-color-change">
              <h1 className="text-centerz" >
              Terms and Conditions                 
              </h1>
              <br />

              <h1>INTRODUCTION</h1>
              <p style={{ fontSize: "larger" }}>
                Thank you for choosing to visit Honest Home Hub, herein referred to as "Company", “Honest Home Hub”, "We", "Us", or "Our". The following Terms and Conditions ("Terms") delineate the governing framework for your access, interaction, and use of all features, functionalities, services, content, and offerings presented, facilitated, or offered through our official website, sub-domains, affiliated platforms, app, and Service (collectively, "the Platform"). You, as the user of the Platform, and us, the Company, may collectively be referred to as “Parties” within these Terms.
              </p>

              <p style={{ fontSize: "larger" }}>
                Our Platform is designed to provide you with an in-depth understanding of our services, offerings, and operations, and to facilitate your interaction and engagement with us. By accessing, browsing, registering, or engaging in any form of interaction on or through our Platform, you willingly and expressly acknowledge, accept, and agree to be bound, without limitation or qualification, by these Terms. Furthermore, you confirm that you possess the legal authority to enter into this agreement, and that you will abide by all of its stipulations. It is imperative that you read and comprehend these Terms in their entirety before proceeding. If, for any reason, you disagree with or cannot comply with these Terms, we urge you to refrain from using our Platform.
              </p>



              <p style={{ fontSize: "larger" }}>
                In addition to these Terms, you are also bound by our Privacy Policy, which explains our practices concerning the collection, use, and sharing of your personal information. By agreeing to these Terms, you also consent to the data practices stated in our Privacy Policy.
              </p>



              <p style={{ fontSize: "larger" }}>
                We reserve the right to modify, amend, replace, or terminate these Terms at any point in time, at our sole discretion. It remains your responsibility to periodically review these Terms for any updates or changes. Your continued use of our Platform post any modifications signifies your acceptance of the amended Terms.
              </p>


              <h1>SERVICES</h1>
              <p style={{ fontSize: "larger" }}>
                Scope of Services: Honest Home Hub assists Users in addressing a variety of home service needs through the following service categories, including but not limited to:

              </p>

              <ul>
                <li> Plumbing</li>
                <li> Cleaning</li>
                <li> Roofing
                </li>
                <li> Fencing</li>
                <li> HVAC</li>
                <li> Landscaping
                </li>
                <li> Handyman services
                </li>
                <li> Home remodeling
                </li>

                <li> Water heater repairs
                </li>
              </ul>


              <p style={{ fontSize: "larger" }}>
                Through the Platform, Users may submit service requests, receive quotes, select Service Providers, and coordinate service delivery.

              </p>


                      <p style={{ fontSize: "larger" }}>Service Matching Process: Once a User submits a service request, Honest Home Hub will match the User with up to three vetted Service Providers based on the type of service needed, location, and the User's specified availability. Honest Home Hub does not guarantee that three Service Providers will always be available, nor does it guarantee that the User will receive multiple quotes.
              </p>





              <ul>
                <li> Service Request Submission: The User must provide accurate and comprehensive details regarding the requested service. This includes a brief description of the issue, up to four images (where applicable), and available times for Service Providers to visit the property if necessary. In some cases, such as cleaning, landscaping, and certain types of repairs, Service Providers may provide quotes based solely on the images and information submitted without a physical property visit.</li>
                <li> Vetting of Service Providers: Honest Home Hub takes reasonable efforts to verify the qualifications and credentials of Service Providers. However, Honest Home Hub does not guarantee the quality of work, pricing, or methods used by individual Service Providers. The ultimate decision to hire a Service Provider remains with the User.</li>
              </ul>


                      <p style={{ fontSize: "larger" }}>Vendor Selection and Quote Process: Once Service Providers have visited the User’s property, they will submit their quotes and any relevant service details directly through the Platform. Users can view and compare these quotes based on price, methods, and estimated completion time.
              </p>


              <ul>
                <li> 	Quote Comparison: Honest Home Hub provides the necessary tools for Users to compare quotes but does not provide warranties or representations regarding the suitability of a particular Service Provider.</li>
                <li>	Consultation with Experts: At the User’s request, Honest Home Hub may facilitate a consultation with an expert to review and recommend the most appropriate quote based on factors such as price, technique, and vendor reputation. The expert’s advice is non-binding, and the final selection is at the sole discretion of the User.</li>
              </ul>


                      <p style={{ fontSize: "larger" }}>Communication and Project Coordination: Users will communicate and coordinate with Service Providers through the Platform's integrated chat function. All project details, including scheduling, additional requests, or clarifications, must be handled through the Platform to ensure transparency, accountability, and proper documentation of all agreements.
              </p>


              <ul>
                <li> Communication Monitoring: Honest Home Hub reserves the right to monitor communications between Users and Service Providers for quality assurance, dispute resolution, and service improvement purposes.</li>
                <li> 	Project Completion: Once a service is completed, the User will have the opportunity to confirm the service's satisfactory completion through the Platform. If no confirmation is provided within a reasonable timeframe, Honest Home Hub reserves the right to release the funds held in escrow to the Service Provider based on the evidence provided of job completion.
                </li>

              </ul>


              <h1>PAYMENT TERMS.
              </h1>
              <p style={{ fontSize: "larger" }}>
                User Payments: All payments for services facilitated through the Honest Home Hub Platform must be made directly through the Platform’s secure payment system. This ensures the protection of both the User and the Service Provider (Home Pro) by holding funds in escrow until the service has been completed to the User's satisfaction.

              </p>


              <ul>
                <li>	Payment Method: Users are required to provide valid payment information upon selecting a service and accepting a quote from a Service Provider. Accepted forms of payment include major credit cards and other payment methods made available on the Platform.
                </li>
                <li> 	Escrow Account: Upon the acceptance of a service quote, the full quoted amount will be held in an escrow account until the service is completed. Once the User confirms satisfactory completion of the service through the Platform, the payment will be released to the Service Provider.
                </li>
              </ul>



                      <p style={{ fontSize: "larger" }}>Escrow Process: The Platform utilizes an escrow system to ensure that both Users and Service Providers are protected during transactions.
              </p>

              <ul>
                <li> Payment into Escrow: After a User selects a quote from a Service Provider, the agreed-upon amount is automatically deducted from the User’s payment method and held in escrow until the service is completed.
                </li>

                <li>	Release of Payment: Once the Service Provider completes the service, the User must confirm satisfactory completion on the Platform. Upon confirmation, the funds held in escrow will be released to the Service Provider.
                </li>

                <li>	No Direct Payments: Users are prohibited from making direct payments to Service Providers outside of the Platform’s payment system. All payments must be processed through Honest Home Hub’s escrow system to maintain transparency and ensure both parties are protected.
                </li>
              </ul>


                      <p style={{ fontSize: "larger" }}>Refund Provision: If a User is dissatisfied with the service provided for any reason (e.g., poor service, theft, damage, or unmet expectations), Honest Home Hub may issue a full refund. Honest Home Hub reserves the right to evaluate refund requests to prevent misuse of this policy.
              </p>



<ul>
  <li>	User Complaints: If a User reports dissatisfaction, they may contact Honest Home Hub support to request a refund. Users must provide details of the issue, but no formal dispute process is required.
  </li>
  <li>	Criteria for Refunds: Refunds will be granted if the service did not meet the agreed-upon standards. Repeated refund requests from a User may lead to additional scrutiny and potential limitation of services.
  </li>
</ul>


        <p style={{ fontSize: "larger" }}>Payment Terms for Service Providers (Home Pros): The payment terms for Service Providers are governed by a separate Independent Contractor Agreement, which outlines the compensation structure, invoicing procedures, and payment timelines between Honest Home Hub and Service Providers. These terms include, but are not limited to:
</p>


<ul>
  <li>	Fee Structure: The Independent Contractor Agreement will detail the fees payable to Service Providers for services rendered, as well as any applicable deductions or platform fees.
  </li>

  <li>	Payment Schedule: Payments to Service Providers will be made in accordance with the timeline outlined in the Independent Contractor Agreement once the User confirms service completion and the funds are released from escrow.
  </li>
</ul>

        <p style={{ fontSize: "larger" }}>Taxes: Users are solely responsible for any taxes related to the services they purchase through the Platform. Honest Home Hub is not responsible for collecting or remitting taxes on behalf of Users.
</p>

<ul>
  <li>	Sales Tax: Depending on local tax regulations, applicable taxes may be added to the total cost of the service. Users will be notified of any applicable taxes at the time of checkout.
  </li>

  <li>	Service Provider Taxes: Service Providers are solely responsible for reporting and remitting any taxes on income received through the Platform as required by law. Honest Home Hub does not withhold taxes from payments made to Service Providers.
  </li>
</ul>


              <h1>REVIEWS</h1>
              <p style={{ fontSize: "larger" }}>
              Honest and Fair Reviews: Users are expected to provide reviews that reflect their genuine experience with the Service Providers. Reviews should be factual, constructive, and based on the services rendered. Inaccurate or misleading reviews can harm both Service Providers and the integrity of the Platform.

              </p>



<ul>
  <li>	Review Integrity: You are responsible for ensuring that any review or rating you submit is truthful and accurately represents your experience. Honest Home Hub does not tolerate the submission of fraudulent, exaggerated, or misleading reviews.
  </li>
</ul>

        <p style={{ fontSize: "larger" }}>Moderation and Removal of Reviews: Honest Home Hub reserves the right to moderate, edit, or remove any reviews that violate these Terms or the Platform’s policies. This includes reviews that contain offensive language, discriminatory statements, or content deemed inappropriate by Honest Home Hub.
</p>


<ul>
  <li>	Right to Remove: We reserve the right to remove any review we believe is fake, malicious, misleading, or otherwise violates our guidelines. Honest Home Hub may also take action against Users who repeatedly submit harmful or inappropriate reviews, including suspending or terminating their accounts.
  </li>
</ul>



        <p style={{ fontSize: "larger" }}>Prohibited Conduct: The following actions are strictly prohibited with respect to submitting reviews on Honest Home Hub:
</p>



<ul>
  <li>	Fake Reviews: Submitting a review for a Service Provider you have not engaged with or creating multiple accounts to submit false reviews is not allowed.
  </li>
  <li>	Malicious Reviews: You may not post reviews that are intended to harass, defame, or unfairly damage the reputation of a Service Provider.
  </li>
  <li>	Conflict of Interest: Service Providers may not post reviews about their own services or solicit others to post reviews on their behalf that are not based on real experiences.
  </li>
</ul>


        <p style={{ fontSize: "larger" }}>Consequences of Violating Review Policies: Violating our review policies may result in:
</p>


<ul>

  <li>	The removal of the review in question.
  </li>

  <li>	Suspension or termination of your account.
  </li>

  <li>	Further legal action if the review constitutes defamation or other unlawful conduct.
  </li>
</ul>
              <h1>INSURANCE.
              </h1>
              <p style={{ fontSize: "larger" }}>
              Verification of Insurance and Licensing: Honest Home Hub makes reasonable efforts to verify that Service Providers are insured and licensed based on the information they provide during the registration and vetting process. We conduct reviews of the credentials submitted by Service Providers, but we do not guarantee the accuracy or current status of any insurance or licensing information.
              </p>

              <ul>
                <li>	Service Provider Responsibility: Service Providers are solely responsible for maintaining valid insurance and appropriate licenses to perform the services they offer. It is their obligation to provide accurate and truthful information regarding their credentials.
                </li>

                <li>	No Guarantee: Honest Home Hub does not guarantee that any Service Provider listed on the Platform is currently licensed or insured at the time of service. Users are encouraged to confirm these details directly with the Service Provider if they have any concerns.
                </li>
              </ul>

                      <p style={{ fontSize: "larger" }}>User Acknowledgment: By using the Platform, you acknowledge and agree that Honest Home Hub:
              </p>



              <ul>
                <li>	Requires but does not guarantee the licensing or insurance status of Service Providers.
                </li>
                <li>	Relies on the information provided by Service Providers for verification purposes and does not independently verify the current status of licenses or insurance after initial vetting.
                </li>

                <li>	Is not liable for any damages, losses, or legal issues arising from the Service Provider’s failure to maintain proper insurance or licensing.
                </li>
              </ul>


                      <p style={{ fontSize: "larger" }}>Service Provider Accountability: If a User discovers that a Service Provider lacks proper insurance or licensing, they should report the issue to Honest Home Hub immediately. Honest Home Hub will review the matter and may take action, including suspending or removing the Service Provider from the Platform.
              </p>

              <h1>SAFETY.</h1>
              <p style={{ fontSize: "larger" }}>
              User Responsibilities for Safety: As a User, you are responsible for taking necessary precautions to ensure your personal safety and the security of your property when engaging with Service Providers. This includes:

              </p>


              <ul>
                <li>	Presence During Service: You should ensure that someone is present at the property during the service, whether it is yourself or a trusted representative.
                </li>

                <li>	Verification of Identity: Confirm the identity of the Service Provider before granting them access to your property. Honest Home Hub provides profiles and contact information to facilitate this verification.
                </li>
                <li>	Access and Safety: Provide safe access to your property and remove any hazards that could pose a risk to the Service Provider or your property during service provision.
                </li>
              </ul>

                      <p style={{ fontSize: "larger" }}>Guidelines for Interactions with Service Providers: To ensure respectful and professional interactions between Users and Service Providers, the following guidelines should be observed:
              </p>


              <ul>
                <li>	Clear Communication: Use Honest Home Hub’s messaging system to clearly communicate expectations, timelines, and any special instructions regarding the service. Avoid unnecessary personal contact or direct communication outside the Platform.
                </li>
                <li>	Professional Conduct: Treat Service Providers with respect and professionalism. Similarly, Service Providers are expected to maintain professionalism and respect towards Users at all times.
                </li>

                <li>	No Harassment or Misconduct: Users and Service Providers must refrain from any form of harassment, abuse, or misconduct during interactions. Honest Home Hub has zero tolerance for behavior that compromises safety or professionalism.
                </li>
              </ul>


                      <p style={{ fontSize: "larger" }}>Reporting Safety Concerns: If you experience or observe any behavior or situations that compromise your safety, security, or comfort during interactions with a Service Provider, you should report these concerns to Honest Home Hub immediately.
                </p>

                <ul>
                  <li>	How to Report: Use the reporting mechanisms available through the Platform or contact our customer support team directly. Reports should include a detailed description of the incident, including the date, time, and parties involved.
                  </li>
                  <li>	Honest Home Hub’s Response: Upon receiving a safety-related report, Honest Home Hub will promptly investigate the situation. We may take action, including but not limited to removing the Service Provider from the Platform, suspending accounts, or involving law enforcement where necessary.
                  </li>
                </ul>

                        <p style={{ fontSize: "larger" }}>Disclaimer on Safety: While Honest Home Hub strives to ensure a safe environment by vetting Service Providers, we do not guarantee the behavior, actions, or security of any Service Provider. Users are responsible for exercising caution during interactions, and Honest Home Hub is not liable for any incidents that occur during service provision.
                </p>

                <h1>ACCOUNT CREATION.
                </h1>

                        <p style={{ fontSize: "larger" }}>To access and use certain features of the Honest Home Hub Platform, including submitting service requests and communicating with Service Providers, Users must create an account. By creating an account, you agree to the following terms:
                </p>

                <ul>
                  <li>	Account Information: You must provide accurate, current, and complete information during the registration process. This includes your name, valid email address, phone number, and any other information required to facilitate services.
                  </li>
                  <li>	Account Security: You are responsible for maintaining the confidentiality of your login credentials and for any activities that occur under your account. You must notify Honest Home Hub immediately if you suspect any unauthorized use of your account.
                  </li>
                  <li>	Account Types: Honest Home Hub offers two types of accounts:
                  </li>

                  <li>	Customer Account: For homeowners or users seeking services.
                  </li>

                  <li>	Service Provider Account: For Home Pros who wish to offer their services through the Platform. Service Providers must accept the terms of the Independent Contractor Agreement when creating their account.
                  </li>

                  <li>	Age Requirement: You must be at least 18 years old to create an account and use the Platform.
                  </li>
                </ul>

                        <p style={{ fontSize: "larger" }}>Honest Home Hub reserves the right to suspend or terminate your account if you provide inaccurate information, engage in prohibited activities, or violate these Terms.
                </p>


                <h1>USER OBLIGATIONS.
                </h1>

                        <p style={{ fontSize: "larger" }}>Compliance with Terms: By accessing, interacting with, or using any part of the Platform, you agree to comply fully with these Terms and any additional policies or rules made available on the Platform, including but not limited to our Privacy Policy. You acknowledge that failure to comply with any part of these Terms may result in the termination of your access to the Platform and its services.
                </p>

                        <p style={{ fontSize: "larger" }}>Accurate Information: You agree to provide accurate, current, and complete information when interacting with the Platform, such as during account registration or in any communication with Honest Home Hub. You are solely responsible for maintaining the accuracy of the information associated with your account and for promptly updating any changes. Misrepresentation or failure to provide accurate information may result in suspension or termination of access to the Platform.
                </p>

                        <p style={{ fontSize: "larger" }}>Account Security: If the Platform requires you to create an account, you are responsible for safeguarding the login credentials (username, password, or other security information) associated with your account. You are fully responsible for all activities conducted under your account, whether or not authorized by you. If you suspect any unauthorized use of your account or any security breach, you must immediately notify Honest Home Hub. Honest Home Hub will not be held liable for any losses or damages arising from unauthorized use of your account.
                </p>

                        <p style={{ fontSize: "larger" }}>Payment of Fees: For any paid services accessed through the Platform, you agree to pay all applicable fees in accordance with the payment terms set forth in the “Services and Fees” section. Failure to make timely payments may result in suspension or termination of access to the paid services.
                </p>

                <h1>DISCLAIMER</h1>

                        <p style={{ fontSize: "larger" }}>General Disclaimer: Honest Home Hub provides its services on an "as-is" and "as-available" basis without any warranties, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance. We do not guarantee:
                </p>


                <ul>
                  <li>	The availability, accuracy, completeness, or timeliness of the Platform or the services offered through it.
                  </li>

                  <li>	That the Platform will meet your specific requirements or expectations.
                  </li>

                  <li>	That the Platform will be uninterrupted, secure, or error-free, or that any defects will be corrected.
                  </li>
                </ul>

                        <p style={{ fontSize: "larger" }}>No Guarantee of Service Provider Performance: Honest Home Hub facilitates the connection between Users and vetted Service Providers but does not directly provide home services. As such:
                </p>

                <ul>
                  <li>	We do not guarantee the quality, suitability, safety, or reliability of the services provided by Service Providers.
                  </li>

                  <li>	Honest Home Hub is not liable for any actions or omissions of the Service Providers, including delays, damages, personal injury, or unsatisfactory work.
                  </li>

                  <li>	All disputes or claims regarding the services rendered by Service Providers must be directed to the Service Provider, and Honest Home Hub will not be responsible for mediating or resolving such disputes unless initiated through our Platform's dispute resolution process.
                  </li>
                </ul>

                        <p style={{ fontSize: "larger" }}>No Endorsement of Service Providers: Honest Home Hub’s role is to facilitate the connection between Users and Service Providers. We do not endorse, recommend, or verify the qualifications, background, or skills of any Service Provider, nor do we guarantee that a particular Service Provider will meet your expectations. You agree that:
                </p>

                <ul>
                  <li>	You are solely responsible for evaluating and selecting a Service Provider from the options provided.
                  </li>
                  <li>	Honest Home Hub is not liable for any loss or damage that may occur as a result of your engagement with a Service Provider.
                  </li>
                </ul>

                <h1>LIMITATION OF LIABILITY.
                </h1>

                        <p style={{ fontSize: "larger" }}>Limitation of Damages: TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL HONEST HOME HUB, ITS SUBSIDIARIES, AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, OR LICENSORS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING BUT NOT LIMITED TO:
                </p>

                <ul>
                  <li>	Loss of profits, revenues, business, goodwill, data, or other intangible losses;
                  </li>

                  <li>	Damages arising from any interruption, suspension, or termination of your access to the Platform;
                  </li>
                  <li>	Personal injury, property damage, or emotional distress resulting from the actions or omissions of Service Providers or your use of the Platform;
                  </li>

                  <li>	Costs of procurement of substitute services, or failure of performance by any Service Provider or third party.
                  </li>
                </ul>

                        <p style={{ fontSize: "larger" }}>THIS LIMITATION APPLIES REGARDLESS OF WHETHER THE CLAIM IS BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, AND REGARDLESS OF WHETHER HONEST HOME HUB HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>

                        <p style={{ fontSize: "larger" }}>Cap on Liability: IN NO EVENT SHALL HONEST HOME HUB'S TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS, LOSSES, LIABILITIES, AND DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, EXCEED THE GREATER OF:
                </p>

                <ul>
                  <li>	The total amount paid by you to Honest Home Hub for services during the six (6) months immediately preceding the event giving rise to the claim, or
                  </li>

                  <li>	$1,000 USD.
                  </li>


                </ul>

                        <p style={{ fontSize: "larger" }}>This cap on liability is cumulative and not per incident. Multiple claims will not increase the liability cap. You agree that this limitation of liability reflects a reasonable allocation of risk between the Parties.
                </p>

                        <p style={{ fontSize: "larger" }}>Service Provider Liability: You acknowledge and agree that Honest Home Hub is not liable for the actions, omissions, or performance of any Service Provider. Service Providers are independent contractors, and Honest Home Hub merely facilitates the connection between Users and Service Providers. Any legal claim or dispute related to services provided by a Service Provider must be directed against that Service Provider and not Honest Home Hub. Honest Home Hub disclaims all liability arising from the acts or omissions of Service Providers, including but not limited to:
                </p>


                <ul>
                  <li>	Any errors or omissions in the services provided;
                  </li>

                  <li>	Any breach of duty, negligence, or misconduct by a Service Provider;
                  </li>

                  <li>	Any damage to property or personal injury caused by a Service Provider;
                  </li>

                  <li>	Any failure by a Service Provider to comply with applicable laws or regulations.
                  </li>
                </ul>

                        <p style={{ fontSize: "larger" }}>Waiver of Claims: By using the Platform, you waive any and all claims against Honest Home Hub, its affiliates, officers, directors, employees, or agents arising from or related to the services provided by a Service Provider, the accuracy of the information provided through the Platform, or any unauthorized access to or use of your account. You agree that this waiver is an essential term of these Terms and that your use of the Platform would not be possible without this waiver.
                </p>

                <h1>PROHIBITED USES.
                </h1>

                        <p style={{ fontSize: "larger" }}>Users are required to adhere to specific standards of conduct to maintain the integrity and functionality of the Service. The following activities are strictly prohibited on the Service and constitute a violation of these Terms:
                </p>

                <ul>
                  <li>	Illegal Activities: Users shall not use the Service for any unlawful purposes, nor in furtherance of illegal activities. This includes, but is not limited to, engaging in fraud, theft, or any other criminal behavior.
                  </li>

                  <li>	Infringement of Intellectual Property: Users are prohibited from posting, uploading, sharing, or otherwise distributing any content that infringes upon the intellectual property rights of others, including copyrights, trademarks, patents, trade secrets, or any other proprietary rights.
                  </li>

                  <li>	Harassment and Abuse: Users must not engage in harassment, bullying, stalking, or any other behavior that is intended to threaten, intimidate, or coerce other users or individuals. This includes the use of abusive, defamatory, offensive, or obscene language and content.
                  </li>
                  <li>	Misrepresentation and Impersonation: Users are forbidden from impersonating any person or entity, or falsely stating or otherwise misrepresenting their affiliation with a person or entity. This also includes providing false or misleading information during the account creation or verification process.
                  </li>

                  <li>	Spam and Malware Distribution: Users must not use the Service to transmit spam, including unsolicited or unauthorized advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes, or any other form of solicitation. The distribution of viruses, malware, or any other harmful or destructive software or data is also strictly prohibited.
                  </li>

                  <li>	Interference with the Service: Users shall not interfere with or disrupt the Service or servers or networks connected to the Service, nor disobey any requirements, procedures, policies, or regulations of networks connected to the Service.
                  </li>

                  <li>	Data Mining and Scraping: Unauthorized data mining, scraping, or similar data gathering and extraction tools or techniques on the Service are prohibited.
                  </li>

                  <li>	Content Violations: Users are prohibited from posting or transmitting content that is violent, pornographic, discriminatory, or otherwise offensive or inappropriate, as determined in the sole discretion of Honest Home Hub.
                  </li>

                  <li>	Bypassing Security Measures: Attempting to bypass any measures Honest Home Hub may use to prevent or restrict access to the Service, including attempting to access areas or features of the Service for which the user does not have access rights, is strictly prohibited.
                  </li>
                </ul>

                        <p style={{ fontSize: "larger" }}>Violations of these prohibited uses may lead to immediate termination of the user's account and legal action, where appropriate.
                </p>


                <h1>DATA PRIVACY.
                </h1>

                        <p style={{ fontSize: "larger" }}>Commitment to Privacy: At Honest Home Hub, we are deeply committed to maintaining the trust and confidence of our users. We understand that when you choose to provide us with information about yourself, you trust us to act responsibly and in your best interests, hence we take that trust seriously and are committed to ensuring the privacy and security of your personal information.
                </p>

                        <p style={{ fontSize: "larger" }}>Collection of Data: We may collect various types of information, including personal and non-personal data, as you interact with our Platform. Personal data could include your name, email address, or physical address. 
                </p>

                        <p style={{ fontSize: "larger" }}>Use of Data: Your data aids us in offering a more tailored and user-friendly experience, processing your orders efficiently, responding to your inquiries promptly, and keeping you informed about our latest products and offerings.
                </p>

                        <p style={{ fontSize: "larger" }}>Privacy Policy: For a more detailed understanding of how we collect, use, and protect your personal data, please refer to our comprehensive Privacy Policy. By using our Platform, you consent to the practices detailed in our Privacy Policy.
                </p>

                        <p style={{ fontSize: "larger" }}>Changes to the Provision: We may update this DATA PRIVACY provision from time to time. Any changes will be effective immediately upon posting the updated provision on our Platform. Your continued use of our Platform following such updates signifies your acceptance of the changes.
                </p>

                <h1>INDEMNIFICATION.
                </h1>

                        <p style={{ fontSize: "larger" }}>Obligation to Indemnify: YOU HEREBY AGREE TO INDEMNIFY, DEFEND, AND HOLD HARMLESS HONEST HOME HUB, ITS SUBSIDIARIES, AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, CONSULTANTS, SUPPLIERS, AND ANY THIRD-PARTY WEBSITE PROVIDERS FROM AND AGAINST ALL CLAIMS, LIABILITIES, DAMAGES, LOSSES, COSTS, EXPENSES, FEES (INCLUDING REASONABLE ATTORNEYS' FEES AND COSTS) THAT SUCH PARTIES MAY INCUR AS A RESULT OF OR ARISING FROM YOUR (OR ANYONE USING YOUR ACCOUNT’S) VIOLATION OR BREACH OF ANY REPRESENTATION OR OBLIGATION UNDER THESE TERMS OR YOUR USE OF OUR PLATFORM OR THE SERVICES OR PRODUCTS WE OFFER.
                </p>

                        <p style={{ fontSize: "larger" }}>Cooperation and Defense: You agree to cooperate fully in the defense of any claim challenged or questioned under this indemnification provision. Honest Home Hub reserves the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, and you shall not in any event settle any matter without the written consent of Honest Home Hub.
                </p>

                        <p style={{ fontSize: "larger" }}>Continuous Effect: This indemnification provision shall remain in full force and effect regardless of any investigation made by or on behalf of the indemnified party or any officer, director, or employee of such indemnified party and shall survive the termination of your use of our Platform or any services or products we offer.
                </p>

                        <p style={{ fontSize: "larger" }}>No Limitation: Your indemnification obligations cover claims against you and Honest Home Hub alike, including situations where you have acted negligently or in a manner that may not align with the best interests of Honest Home Hub.
                </p>

                <h1>THIRD PARTY LINKS.
                </h1>

                        <p style={{ fontSize: "larger" }}>External Links Disclaimer: The Platform may contain links to external websites and resources provided by third parties. These links are provided for your convenience and information only. The inclusion of any link does not imply endorsement, approval, or control by the Company of the external site or its contents. These third-party sites have their own terms and conditions and privacy policies, which we do not govern or endorse.
                </p>

                        <p style={{ fontSize: "larger" }}>User Discretion Advised: When you access third-party websites, you do so at your own risk. You acknowledge that different terms of use and privacy policies may apply to your use of such third-party services and content. We encourage you to review the terms and privacy policies of any third-party website or service that you visit.
                </p>

                        <p style={{ fontSize: "larger" }}>No Liability for Third-Party Websites: The Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any content, goods, or services available on or through any such third-party websites or services. We do not guarantee the accuracy, completeness, or usefulness of any information on third-party websites and do not warrant the safety or legality of any third-party website or service.
                </p>

                        <p style={{ fontSize: "larger" }}>No Affiliation or Endorsement: The presence of links to third-party websites does not constitute an affiliation with, endorsement of, or sponsorship by the Company of those websites, their operators, or the content, products, or services contained or accessible through those websites.
                </p>
                        <p style={{ fontSize: "larger" }}>Changes and Removal of Links: We reserve the right, at any time and without notice, to add to, change, update, or modify our Platform, including the removal or alteration of any third-party links. However, we do not have any obligation to review, monitor, check, or remove any third-party content or websites.
                </p>

                <h1>INTELLECTUAL PROPERTY.
                </h1>

                        <p style={{ fontSize: "larger" }}>All content, materials, and intellectual property featured or displayed on the Platform, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, software, data compilations, page layout, design, and any other content (collectively, "Content"), are the exclusive property of Honest Home Hub, its affiliates, or its licensors and are protected by applicable copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>


                <ul>
                  <li>	Ownership of Intellectual Property: Honest Home Hub and its licensors retain all rights, title, and interest in and to the Platform and its Content. The use of the Platform does not grant you any ownership or intellectual property rights in the Platform or the Content, except as expressly provided in these Terms.
                  </li>
                  <li>	License to Use the Platform: Honest Home Hub grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform and its Content solely for your personal or authorized business use, as permitted by these Terms. 
                  </li>

                  <li>
                  ⦁	Restrictions on Use: You agree not to:

                  </li>

                  <li>	Copy, reproduce, modify, create derivative works from, display, perform, publish, distribute, transmit, broadcast, or otherwise exploit any portion of the Platform or its Content without the prior written consent of Honest Home Hub.
                  </li>

                  <li>	Remove, alter, obscure, or interfere with any copyright, trademark, or other proprietary rights notices displayed on or within the Platform or its Content.
                  </li>

                  <li>	Reverse engineer, decompile, or disassemble any part of the Platform, except to the extent that such activity is expressly permitted by applicable law.
                  </li>

                  <li>	Trademarks: All trademarks, service marks, logos, trade names, and trade dress (collectively, "Trademarks") displayed on the Platform are the property of Honest Home Hub or their respective owners. The use of any Trademarks without the express written consent of Honest Home Hub or the respective owner is strictly prohibited. Nothing on the Platform or in these Terms should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any Trademark displayed on the Platform without our written permission or that of the third-party rights holder.
                  </li>

                  <li>	User-Generated Content: If you submit or post any content, including but not limited to documents, images, feedback, comments, or other materials ("User-Generated Content"), on or through the Platform, you hereby grant Honest Home Hub a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such User-Generated Content, in whole or in part, in any form, media, or technology, whether now known or hereafter developed, for the purposes of providing our services or improving the Platform.
                  </li>

                  <li>	Reporting Intellectual Property Violations: If you believe that any content on the Platform infringes your intellectual property rights, please contact us with detailed information about the alleged infringement, including a description of the content, the location on the Platform, and proof of your ownership of the intellectual property rights. Honest Home Hub reserves the right to remove or disable access to any content that it believes, in its sole discretion, may infringe the intellectual property rights of others.
                  </li>

                  <li>	Reservation of Rights: Honest Home Hub reserves all rights not expressly granted in these Terms. No part of the Platform or its Content may be copied, reproduced, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, or distributed in any way without the express prior written consent of Honest Home Hub, except as expressly permitted in these Terms.
                  </li>
                </ul>

                <h1>DISPUTE RESOLUTION.</h1>
                        <p style={{ fontSize: "larger" }}>Mediation: If the parties are unable to resolve the dispute through direct negotiations, they agree to endeavor to settle the dispute through mediation administered by a neutral mediator before resorting to litigation or any other dispute resolution procedure. The parties will jointly appoint an agreeable mediator and will share equally in the costs of such mediation.
                </p>

                        <p style={{ fontSize: "larger" }}>Binding Arbitration: If mediation proves unsuccessful, either party may initiate binding arbitration. Such arbitration shall be administered by a recognized arbitral body mutually agreed upon by the parties. The judgment rendered by the arbitrator may be entered in any court having jurisdiction thereof. Each party shall bear its own costs in the arbitration and shall share equally the costs of the arbitrator.
                </p>

                        <p style={{ fontSize: "larger" }}>Exceptions: Notwithstanding the above clauses, Honest Home Hub reserves the right to seek injunctive relief or file for damages in any court of competent jurisdiction in cases where Honest Home Hub believes that its intellectual property rights have been violated or where it deems necessary to protect its business interests.
                </p>

                <h1>GOVERNING LAW.</h1>
                        <p style={{ fontSize: "larger" }}>Jurisdiction & Applicability: These Terms, including all agreements and policies incorporated by reference, shall be governed by, and construed in accordance with, the laws of the State of Texas, without giving effect to any principles of conflicts of laws thereof that would lead to the application of the laws of another jurisdiction.
                </p>

                        <p style={{ fontSize: "larger" }}>Scope: The laws of the State of Texas shall govern all matters arising out of or relating to these Terms, including, without limitation, its validity, interpretation, construction, performance, and enforcement.
                </p>

                        <p style={{ fontSize: "larger" }}>Exclusivity: Both parties agree that any legal action or proceeding arising out of or in connection to the obligations, rights, and remedies of parties under these Terms shall be brought exclusively in the courts of  Texas. Each party consents and submits to the exclusive jurisdiction of these courts in any such action or proceeding and waives any objection to venue or inconvenient forum.
                </p>

                        <p style={{ fontSize: "larger" }}>International Use & Compliance: If you access our Platform from outside the United States, you are responsible for compliance with local laws. Honest Home Hub makes no representation that materials or content available through our Platform are appropriate or available for use outside of the United States, and accessing them from territories where their contents are illegal is prohibited.
                </p>

                        <p style={{ fontSize: "larger" }}>Waiver of Class Action: You and Honest Home Hub agree that any proceedings to resolve or litigate any dispute will be conducted on an individual basis and not as a class action or other representative action, whether within a class-wide arbitration, by a class action, or otherwise. Both parties expressly waive any ability to maintain any class action in any forum.
                </p>

                <h1>AMENDMENTS</h1>

                        <p style={{ fontSize: "larger" }}>We reserve the right to modify, update, or change these Terms at any time and without prior notice. Any modifications will be effective immediately upon posting on our Platform. It is your responsibility to review these Terms periodically to stay informed of any updates or changes. By continuing to access our website and use our services after the modifications have been made, you agree to be bound by the revised Terms.
                </p>

                <ul>
                  <li>	Changes to Terms: We may modify these Terms to reflect changes in our business practices, legal requirements, or improvements to our services. We will make reasonable efforts to provide notice of material changes to these Terms. Such notice may be provided through our website, by email, or by other means we deem appropriate. It is your responsibility to review the updated Terms.
                  </li>

                  <li>	Continued Use: By continuing to access our website and use our services after the modifications have been made, you indicate your acceptance of the modified Terms. If you do not agree with the modified Terms, you should discontinue using our Platform and services.
                  </li>

                  <li>	Effect on Prior Agreements: Any modifications to these Terms will apply prospectively and will not affect any rights or obligations that arose prior to the effective date of the modifications. If you have entered into any separate agreements with us, the terms of those agreements will prevail in the event of any inconsistency with these Terms, unless expressly stated otherwise.
                  </li>

                  <li>	Right to Terminate: We reserve the right to terminate, suspend, or restrict your access to our website and services, in whole or in part, at our sole discretion and without liability, if you fail to comply with these Terms or for any other reason we deem necessary.
                  </li>
                </ul>

                        <p style={{ fontSize: "larger" }}>Please note that any modifications to these Terms will not affect our commitment to protecting your privacy and maintaining the confidentiality and security of your personal information. Our privacy practices are governed by our Privacy Policy.
                </p>

                <h1>WAIVER.</h1>

                        <p style={{ fontSize: "larger" }}>No Automatic Waivers: The failure or delay of Honest Home Hub in exercising any right, remedy, power, or privilege under these Terms shall not constitute a waiver thereof. Similarly, any single or partial exercise of any right, remedy, power, or privilege hereunder shall not preclude further exercise of the same or of any other right, remedy, power, or privilege.
                </p>

                        <p style={{ fontSize: "larger" }}>Written Requirement: Any waiver by Honest Home Hub of a breach of any provision of these Terms shall only be effective if it is in writing and signed by an authorized representative of Honest Home Hub. A waiver of any term or provision shall not be construed as a waiver of any subsequent breach or default, whether of a similar nature or otherwise.
                </p>

                        <p style={{ fontSize: "larger" }}>Retaining Rights: No waiver by Honest Home Hub of any term or condition set out in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Honest Home Hub to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
                </p>

                <h1>HEADINGS.</h1>

                        <p style={{ fontSize: "larger" }}>The headings used in these Terms are for convenience and reference purposes only. They do not limit, interpret, or define the scope or intent of the provisions contained herein. The headings are not intended to be legally binding or to affect the meaning or interpretation of these Terms.
                </p>

                <ul>
                  <li>	Interpretation: The provisions contained in these Terms shall be interpreted in accordance with their plain meaning and intent, regardless of any headings or titles.
                  </li>

                  <li>	Organization and Structure: The headings used throughout these Terms are provided to aid in navigating and understanding the content. They are organized in a logical manner and reflect the general subject matter of the respective sections.
                  </li>

                  <li>	Non-Exclusive: The headings used in these Terms are not an exhaustive representation of the topics covered. Other terms and concepts may be included in each section, regardless of whether they are explicitly stated in the headings.
                  </li>

                  <li>	No Legal Significance: The headings are not intended to have any legal significance or to modify or alter the rights and obligations of the parties under these Terms. They are simply a structural element to enhance readability.
                  </li>
                </ul>

                        <p style={{ fontSize: "larger" }}>Please note that the headings provision is included for organizational purposes and does not impact the substantive rights and obligations set forth in these Terms.
                </p>

                <h1>SEVERABILITY.
                </h1>

                        <p style={{ fontSize: "larger" }}>Enforceability of Terms: In the event that any provision or part of these Terms is determined to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remainder of these Terms shall remain in full force and effect.
                </p>

                        <p style={{ fontSize: "larger" }}>Modification of Invalid Terms: The invalid, illegal, or unenforceable provision shall be modified to the extent necessary to render it valid, legal, and enforceable while preserving its intent. If modification is not possible, the affected provision or part thereof shall be deemed severed from these Terms, but all other provisions and parts of these Terms shall continue in full force and effect.
                </p>
                        <p style={{ fontSize: "larger" }}>Effect on Agreement: The invalidity, illegality, or unenforceability of any provision shall not affect the validity, legality, or enforceability of any other provision or part of these Terms, which shall remain in full force and effect as though such invalid, illegal, or unenforceable provision had never been included.
                </p>

                        <p style={{ fontSize: "larger" }}>Construction: These Terms shall be construed as if each provision and part thereof were drafted independently, and any presumption or rule of construction against construing ambiguities in favor of the drafting party shall not apply to the interpretation or construction of these Terms.
                </p>

                <h1>ENTIRE AGREEMENT</h1>
                        <p style={{ fontSize: "larger" }}>Comprehensive Understanding: These Terms, including any additional policies or agreements incorporated by reference, constitute the entire agreement and understanding between Honest Home Hub and you, superseding all prior or contemporaneous communications, proposals, understandings, agreements, or representations, whether oral or written, between the parties regarding the subject matter herein.
                </p>

                        <p style={{ fontSize: "larger" }}>No Reliance on Oral Representations: You acknowledge that you have not relied upon any representation, promise, or warranty made by Honest Home Hub, except as expressly set forth in these Terms.
                </p>

                        <p style={{ fontSize: "larger" }}>No Oral Modifications: Any modifications, amendments, or supplements to these Terms must be made in writing and signed by an authorized representative of Honest Home Hub. No oral modifications or agreements shall be valid.
                </p>

                        <p style={{ fontSize: "larger" }}>Survival: Any provision that, by its nature, should survive termination or expiration, shall survive termination or expiration, including but not limited to provisions governing intellectual property, limitation of liability, indemnification, dispute resolution, and governing law.
                </p>

                <h1>
                  
CONTACT US
                </h1>

                        <p style={{ fontSize: "larger" }}>Communication Channels: If you have any questions, concerns, or feedback regarding these Terms, our Platform, or any of our products or services, please feel free to contact us through any of the following channels:
                </p>

                <ul>
                  <li>	Email: [Insert Email]
                  </li>
                </ul>

                        <p style={{ fontSize: "larger" }}>Provide Sufficient Information: To assist us in addressing your concerns effectively, please ensure that your communication includes your name, contact information, and a clear description of your question or issue.
                </p>

                        <p style={{ fontSize: "larger" }}>Updates: We may update the contact information provided herein from time to time. It is your responsibility to check this provision for the most current contact information.
                </p>

                        <p style={{ fontSize: "larger" }}>No Legal Advice: Please note that any information provided through our contact channels is for general informational purposes only and does not constitute legal, financial, or professional advice. For specific legal or financial concerns, consult with a qualified professional.
                </p>

                        <p style={{ fontSize: "larger" }}>Record Keeping: We may retain records of your inquiries and our responses for our records and as required by applicable laws and regulations.
                </p>
            </div>
          </div>
        </div>

        <div className="footer-list-footer-box">
          <Footer />
        </div>

      </>
    </div>
  );
};

export default CustomerPolicy;
