import { Link, useNavigate } from "react-router-dom";
import side from "../../assets/Images/Profile-img.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { reset_password_request_otp_asyncv } from "../../Redux/Features/vendorService";
const Forgot  = ({ handleClose }) => {

  const dispatch = useDispatch()
  const [email,setemail]=useState('')

  const navigate= useNavigate()

  const handleSubmit=(e)=>{

    e.preventDefault()

    const formData={
      email:email
    }

    // dispatch(reset_password_request_otp_asyncv(formData))


    dispatch(reset_password_request_otp_asyncv(formData)).then((result) => {
      if (result.type === 'FORGOT_PASSWORD/fulfilled') {
      
        navigate(`/Otp/${email}`)
        
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
              <h2>Forgot Password</h2>
            </div>

            <div className="Login-tital-input-box">
              <div className="Login-tital-input-group">
                <input type="email" placeholder="Enter your email"  onChange={(e)=>setemail(e.target.value)}/>
              </div>

            </div>


            <div className="Login-tital-btn-box">
          
              <button>Send</button>
          
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

export default Forgot;
