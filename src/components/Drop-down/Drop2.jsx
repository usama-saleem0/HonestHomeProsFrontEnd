import React, { useState } from "react";
import Popup1 from "../Popup-site/Popup1";
import { Link } from "react-router-dom";
import ViewPaymentPopup from "../Popup-site/ViewPaymentPopup";

const Drop2 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopupVisible2, setIsPopupVisible2] = useState(false);

  // Function to toggle popup visibility
  const handleViewClick = () => {
    setIsPopupVisible(true); // Show the popup
  };
  const handleViewClick2 = () => {
    setIsPopupVisible2(true); // Show the popup
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setIsPopupVisible(false); // Hide the popup
  };
  const handleClosePopup2 = () => {
    setIsPopupVisible2(false); // Hide the popup
  };

  return (
    <>
      <div className="select-station-drop">
        <div onClick={() => setIsOpen(!isOpen)} className="dropdwon-1-list">
          <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
          </svg></button>
        </div>

        {isOpen && (
          <ul className="options-list">
            {/* <li
              onClick={() => handleOptionClick("Option1")}
              className="select-option"
            >
              View Information
            </li>
            <li
              onClick={() => handleOptionClick("Option2")}
              className="select-option"
            >
              Change Information
            </li> */}
            <li className="select-option" onClick={handleViewClick}>
              Profile Details
            </li>
            <li onClick={handleViewClick2} className="select-option">
              View Payment
            </li>
            <Link
              className="none-list"
              to="/"
              onClick={() => handleChangeIndex(5)}
            >
              <li
                onClick={() => handleOptionClick("Option4")}
                className="select-option"
              >
                <svg
                  fill="none"
                  height="512"
                  viewBox="0 0 24 24"
                  width="512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="rgb(0,0,0)">
                    <path d="m14.9453 1.25c-1.3675-.00002-2.4699-.00004-3.3368.11652-.9001.12102-1.65802.37991-2.25993.98183-.52494.52493-.79018 1.17001-.92941 1.928-.13529.73656-.16117 1.63795-.1672 2.71948-.0023.4142.33161.75185.74582.75416s.75186-.33161.75416-.74581c.00609-1.0935.03449-1.86858.14254-2.45683.10411-.56681.27132-.89489.51472-1.13834.2768-.27676.6654-.45721 1.3991-.55586.7554-.10156 1.7565-.10315 3.1919-.10315h1c1.4354 0 2.4365.00159 3.1919.10315.7338.09865 1.1223.2791 1.3991.55586s.4572.66534.5559 1.39911c.1015.75535.1031 1.75647.1031 3.19188v8c0 1.4354-.0016 2.4365-.1031 3.1919-.0987.7338-.2791 1.1223-.5559 1.3991s-.6653.4572-1.3991.5559c-.7554.1015-1.7565.1031-3.1919.1031h-1c-1.4354 0-2.4365-.0016-3.1919-.1031-.7337-.0987-1.1223-.2791-1.3991-.5559-.2434-.2435-.41061-.5715-.51472-1.1383-.10805-.5883-.13645-1.3634-.14254-2.4569-.0023-.4142-.33995-.7481-.75416-.7458s-.74812.34-.74582.7542c.00603 1.0815.03191 1.9829.1672 2.7194.13923.758.40447 1.4031.92941 1.9281.60191.6019 1.35983.8608 2.25993.9818.8669.1165 1.9693.1165 3.3368.1165h1.1098c1.3676 0 2.4699 0 3.3369-.1165.9001-.121 1.6579-.3799 2.2599-.9818.6019-.602.8608-1.3598.9818-2.2599.1166-.867.1165-1.9693.1165-3.3369v-8.10977c0-1.36759.0001-2.46991-.1165-3.33688-.121-.90011-.3799-1.65798-.9818-2.2599-.602-.60192-1.3598-.86081-2.2599-.98183-.867-.11656-1.9693-.11654-3.3369-.11652z" />
                    <path d="m15 11.25c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-10.97256l1.96065 1.6806c.3145.2695.35092.743.08135 1.0575-.26956.3145-.74304.3509-1.05753.0813l-3.5-3c-.16624-.1424-.26191-.3505-.26191-.5694s.09567-.427.26191-.5694l3.5-3.00004c.31449-.26957.78797-.23315 1.05753.08135.26957.31449.23315.78797-.08135 1.05753l-1.96065 1.68056z" />
                  </g>
                </svg>
                Log Out
              </li>
            </Link>
          </ul>
        )}
      </div>

      {/* Conditionally render the Popup2 component */}
      {isPopupVisible && (
        <div className="popup-View-box">
          <Popup1 handleClose={handleClosePopup} />
        </div>
      )}
      {isPopupVisible2 && (
        <div className="popup-View-box">
          <ViewPaymentPopup handleClose={handleClosePopup2} />
        </div>
      )}
    </>
  );
};

export default Drop2;
