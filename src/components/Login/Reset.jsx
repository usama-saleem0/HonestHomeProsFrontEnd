import { Link, useNavigate, useParams } from "react-router-dom";
import side from "../../assets/Images/Profile-img.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { reset_password_create_password_asyncv } from "../../Redux/Features/vendorService";
import { toast, ToastContainer } from "react-toastify";
 
const Reset = ({ handleClose }) => {

  const {email,otp}=useParams()

  const dispatch= useDispatch()

  const navigate = useNavigate()

  const [formData,setformData]=useState({

    newPassword:'',
    confirmPassword:'',
    email:email,
    otp:otp



})

  const  handleChange=(name,value)=>{

    setformData({
      ...formData,
      [name]:value


    })



  }


  const handlesubmit=(e)=>{

    e.preventDefault()

     


    dispatch(reset_password_create_password_asyncv(formData)).then((result) => {
      if (result.type === 'RESET_PASSWORD/fulfilled') {
      
        toast.success("Password Changed Successfully")

        setTimeout(() => {
          navigate('/')
        }, 2000);

      }
    });


  }





  return (
    <>
    <ToastContainer/>
    <div className="Login-sec">
      <div className="Login-main-box">
        <div className="Login-tital">
          <form className="form" onSubmit={handlesubmit}>

      

            <div className="Login-tital-heading">
              <h2>Reset Password</h2>
            </div>

            <div className="Login-tital-input-box">
              <div className="Login-tital-input-group">
                <input type="Password" placeholder="New Password"
                name="newPassword"
                value={formData.newPassword}
                onChange={(e)=>handleChange(e.target.name,e.target.value)}

                
                
                />
              </div>

              <div className="Login-tital-input-group">
                <input type="Password" placeholder="Confirm Password"
                
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e)=>handleChange(e.target.name,e.target.value)}/>
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

export default Reset;
