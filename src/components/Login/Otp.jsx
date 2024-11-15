import { Link, useNavigate, useParams } from "react-router-dom";
import side from "../../assets/Images/Profile-img.png";
import OTPInput from "./OtpInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { reset_password_verify_otp_asyncv } from "../../Redux/Features/vendorService";
const Otp  = ({ handleClose }) => {

    const {email} = useParams()

  const [otp,setotp]=useState()

  const dispatch = useDispatch()

  const navigate = useNavigate()
   
    const handleComplete = (otp) => {
      // alert(`Entered OTP: ${otp}`);
      // Perform your OTP verification here
      setotp(otp)

      console.log(email,otp)
    };


    const handleSubmit =(e)=>{

      e.preventDefault()

      const formData ={

        email:email,
        otp:otp

      }

      dispatch(reset_password_verify_otp_asyncv(formData)).then((result) => {
        if (result.type === 'VERIFY_OTP_RESET/fulfilled') {
        
          navigate(`/Reset/${email}/${otp}`)
          
        }
      });


      


    }
  

  return (
    <>
    <div className="Login-sec">
      <div className="Login-main-box">
        <div className="Login-tital">
          <form className="form" onSubmit={handleSubmit}>

      

            <div className="Login-tital-heading">
              <h2>OTP Verification</h2>
              <p>Enter the OTP you received</p>
            </div>

            <div className="Login-tital-input-box">
            <div class="input-fields">
    {/* <input placeholder="" type="tel" maxlength="1"/>
    <input placeholder="" type="tel" maxlength="1"/>
    <input placeholder="" type="tel" maxlength="1"/>
    <input placeholder="" type="tel" maxlength="1"/> */}

<OTPInput length={4} onComplete={handleComplete} />
  </div>

            </div>


            <div className="Login-tital-btn-box">
          
              <button>Verify</button>
       
            </div>

            </form>
         </div>

        <div className="Login-img">
          <img src={side} alt="" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Otp;
