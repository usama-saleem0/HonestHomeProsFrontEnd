import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Images/dashlogo.png";
 
const ViewCustomerDetailsPopup = ({ handleClose,profiledata }) => {

  console.log("popup", profiledata)

  const DateFormatCustom = (date) => {
    let x = date;

    const month = [
      "ts",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const mm = x.split("-")[1];

    const yy = x.split("-")[0];

    const dd = x.split("-")[2];

    const y = mm[0].includes("0") ? mm.split("0")[1] : mm;

    // console.log(y)

    const  final_date= month[y]+" "+ dd+" "+ yy

    return final_date;

    // console.log(dd,month[y],yy)
  };

  const formatTime1 = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    const suffix = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute < 10 ? "0" + minute : minute} ${suffix}`;
  };

  return (
    <>
      <div className="Popup1-site">
        <div className="Popup1-heading">
          <div className="Popup1-head-logo">
            <img src={logo} alt="" />
          </div>


          <div className="Popup1-head-icon" onClick={handleClose}>
           <button> <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.93403 29.066C10.8006 29.9326 12.2188 29.9326 13.0854 29.066L19.5 22.6514L25.9146 29.066C26.7812 29.9326 28.1993 29.9326 29.0659 29.066C29.9325 28.1994 29.9325 26.7813 29.0659 25.9146L22.6514 19.5L29.066 13.0854C29.9326 12.2188 29.9326 10.8007 29.066 9.93411C28.1994 9.0675 26.7813 9.0675 25.9146 9.93411L19.5 16.3486L13.0854 9.93403C12.2188 9.06742 10.8007 9.06742 9.93411 9.93403C9.0675 10.8006 9.0675 12.2187 9.93411 13.0853L16.3486 19.5L9.93403 25.9146C9.06742 26.7812 9.06742 28.1994 9.93403 29.066ZM19.5 0C30.2695 0 39 8.73047 39 19.5C39 30.2695 30.2695 39 19.5 39C8.73047 39 0 30.2695 0 19.5C0 8.73047 8.73047 0 19.5 0Z" fill="#DC7139" />
            </svg></button>
          </div>
        </div>


        <div className="Popup1-body">


          <div className="Popup1-Profile-Details-box">

            <div className="Popup1-Profile-Details-card">

              <span>
                <h2>Name :</h2>
                <h3>{profiledata?.userDetails?.Name}</h3>
              </span>
            </div>

            <div className="Popup1-Profile-Details-card">

              <span>
                <h2>Job Details :</h2>

                <h3>{profiledata?.jobs?.details}</h3>
              </span>
            </div>

            {/* <div className="Popup1-Profile-Details-card">

              <span>
                <h2>Email address 1:</h2>

                <h3>{profiledata?.userDetails?.email}</h3>
              </span>
            </div> */}


            <div className="Popup1-Profile-Details-card">

<span>
  <h2>Address :</h2>

  <h3>{profiledata?.jobs?.location}</h3>
</span>
</div>



{/* cleaning */}

    {
          (profiledata?.jobs?.otherrooms!=null && profiledata?.jobs?.bedrooms!=null && profiledata?.jobs?.bathrooms!=null) &&

          <>
          
          <div className="Popup1-Profile-Details-card">

<span>
  <h2>No of Bedrooms:</h2>

  <h3>{profiledata?.jobs?.bedrooms}</h3>
</span>
</div>


<div className="Popup1-Profile-Details-card">

<span>
  <h2>No of Bathrooms:</h2>

  <h3>{profiledata?.jobs?.bathrooms}</h3>
</span>
</div>



<div className="Popup1-Profile-Details-card">

<span>
  <h2>No of Other Rooms:</h2>

  <h3>{profiledata?.jobs?.otherrooms}</h3>
</span>
</div>
          
          
          </>




    }




{/* cleaning */}




            {/* <div className="Popup1-Profile-Details-card">

              <span>
                <h2>Budget :</h2>
                <h3>20$</h3>
              </span>
            </div> */}

            <div className="Popup1-Profile-Details-card">

              <span>
                <h2>Availability Date and Time</h2>

                {
              (profiledata?.jobs?.amount=="" || profiledata?.jobs?.amount=="T,,")&&(profiledata?.jobs?.emergency!='emergency') && profiledata?.jobs?.availablity_time?.map((e,i)=>(


                    <div>

                    <h3>{e?.date && DateFormatCustom(e?.date)} {e?.times[0] && formatTime1(e?.times[0])}</h3>

                  </div>


                  ))

                  

                }
               

                {

                      (profiledata?.jobs?.amount!="" && profiledata?.jobs?.amount!="T,,") && (profiledata?.jobs?.emergency!='emergency')&&
                      <h3>{profiledata?.jobs?.amount && DateFormatCustom(profiledata?.jobs?.amount.split('T')[0])} {profiledata?.jobs?.amount && formatTime1(profiledata?.jobs?.amount.split('T')[1])}</h3>

                }



{

 (profiledata?.jobs?.emergency=='emergency')&&
<h3>Emergency: {profiledata?.jobs?.note} </h3>

}




              </span>
            </div>

            {/* <div className="Popup1-Profile-Details-card">

              <span>
                <h2>Time :</h2>
                <h3>04:20</h3>
              </span>
            </div> */}

            

            <div className="Popup1-Profile-Details-card-1">
              <h2>Images :</h2>
              <div className="Popup1-Profile-Details-card-imger">

                {
                       profiledata?.jobs?.images!=null && profiledata?.jobs?.images.map((e,i)=>(


                <div className="Popup1-Profile-Details-card-imger-box">
                    <img
                    src={e}
                    />
                    
                </div>

                       ))

                }


                {/* <div className="Popup1-Profile-Details-card-imger-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="142" height="142" viewBox="0 0 142 142" fill="none">
                    <rect x="0.5" y="0.5" width="141" height="141" stroke="#F5F5F5" stroke-dasharray="8 8" />
                    <path d="M96 75H75V96H68V75H47V68H68V47H75V68H96V75Z" fill="#F37B3C" fill-opacity="0.6" />
                  </svg>
                    <input type="file" id="myFile" name="filename" />
                </div>


                <div className="Popup1-Profile-Details-card-imger-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="142" height="142" viewBox="0 0 142 142" fill="none">
                    <rect x="0.5" y="0.5" width="141" height="141" stroke="#F5F5F5" stroke-dasharray="8 8" />
                    <path d="M96 75H75V96H68V75H47V68H68V47H75V68H96V75Z" fill="#F37B3C" fill-opacity="0.6" />
                  </svg>
                    <input type="file" id="myFile" name="filename" />
                </div>


            


                <div className="Popup1-Profile-Details-card-imger-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="142" height="142" viewBox="0 0 142 142" fill="none">
                    <rect x="0.5" y="0.5" width="141" height="141" stroke="#F5F5F5" stroke-dasharray="8 8" />
                    <path d="M96 75H75V96H68V75H47V68H68V47H75V68H96V75Z" fill="#F37B3C" fill-opacity="0.6" />
                  </svg>
                    <input type="file" id="myFile" name="filename" />
                </div>


                <div className="Popup1-Profile-Details-card-imger-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="142" height="142" viewBox="0 0 142 142" fill="none">
                    <rect x="0.5" y="0.5" width="141" height="141" stroke="#F5F5F5" stroke-dasharray="8 8" />
                    <path d="M96 75H75V96H68V75H47V68H68V47H75V68H96V75Z" fill="#F37B3C" fill-opacity="0.6" />
                  </svg>
                    <input type="file" id="myFile" name="filename" />
                </div> */}


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCustomerDetailsPopup;
