import { Link, useNavigate } from "react-router-dom";
import side from "../../assets/Images/Profile-img.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login_vendor_async_service } from "../../Redux/Features/vendorService";
import { ToastContainer } from "react-toastify";
const Login = ({ handleClose }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')


 const  {vendor_login_status} = useSelector((state)=>state.vendorAuth)

  const handleLogin=()=>{

      const formData={

        email:email,
        password:password
      }

      console.log(formData,"FORM DATA")

      dispatch(login_vendor_async_service(formData))


  }

  console.log(vendor_login_status)

  if(vendor_login_status==="succeeded")
  {
    navigate('/dashboard')
  }


  return (
    <>
    <ToastContainer/>
    <div className="Login-sec">
      <div className="Login-main-box">
        <div className="Login-tital">
          <div className="form">

      

            <div className="Login-tital-heading">
              <h2>Sign In</h2>
            </div>

            <div className="Login-tital-input-box">
              <div className="Login-tital-input-group">
                <input type="email" placeholder="Enter your email" 
                onChange={(e)=>setemail(e.target.value)}
                
                />
              </div>

              <div className="Login-tital-input-group">
                <input type="Password" placeholder="Enter your Password" 
                  onChange={(e)=>setpassword(e.target.value)}
                
                />
              </div>
            </div>

            <div className="Forgot-Password-box">
            <Link
            className="none-list"
            to="/Forgot"
            onClick={() => handleChangeIndex(5)}
          >
              <p> Forgot Password ?</p>
              </Link>
            </div>

            <div className="Login-tital-btn-box">
           
              <button onClick={()=>handleLogin()}>Login</button>
        
            </div>

            <div className="Login-tital-site">

              
              <p>Not a Member?     <Link
            className="none-list"
            to="/Singup"
            onClick={() => handleChangeIndex(5)}
          > Signup Now </Link></p>
            </div>
            </div>
         </div>

        <div className="Login-img">
          <img src={side} alt="" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;



















































 