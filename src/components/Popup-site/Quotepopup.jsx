import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Images/dashlogo.png";
import { useDispatch, useSelector } from "react-redux";
import { create_payment_async_service } from "../../Redux/Features/vendorService";
import { ToastContainer } from "react-toastify";
const Quotepopup = ({ handleClose ,handleCreateQuoteMessage}) => {

  const [duration,setduration]=useState('')
  const [cost,setcost]=useState('')
  const [jobtime,setjobtime]=useState('')
  const vendorUserID= localStorage.getItem('userId')
  const dispatch = useDispatch()

  const  {  
    get_single_job_details_data
  } = useSelector((state)=>state.vendorAuth)

  const handleSubmit=()=>{


    const formData={

      duration:duration,
      cost:cost,
      jobtime:jobtime,
      vendorId:vendorUserID,
      customerId:get_single_job_details_data?.UserDetails?._id,
      jobId:get_single_job_details_data?.JobDetails?._id,
      InstallmentPerMonth:null,
      FullInstallmentCost:0,
      NumberofInstallments:0


    }

    console.log(formData)

    // dispatch(create_payment_async_service(formData))

    handleCreateQuoteMessage(formData)


    dispatch(create_payment_async_service(formData)).then((result) => {
      if (result.type === 'CREATE_PAYMENT/fulfilled') {
        handleClose()
        console.log("profile_deleted")
        // Call your callback function here
        
      }
    });


  }




  return (
    <>
<ToastContainer/>
      <div className="Createpopup">
<div className="more-icon-site">
<div className="Popup1-head-icon" onClick={handleClose}>
          <button><svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.93403 29.066C10.8006 29.9326 12.2188 29.9326 13.0854 29.066L19.5 22.6514L25.9146 29.066C26.7812 29.9326 28.1993 29.9326 29.0659 29.066C29.9325 28.1994 29.9325 26.7813 29.0659 25.9146L22.6514 19.5L29.066 13.0854C29.9326 12.2188 29.9326 10.8007 29.066 9.93411C28.1994 9.0675 26.7813 9.0675 25.9146 9.93411L19.5 16.3486L13.0854 9.93403C12.2188 9.06742 10.8007 9.06742 9.93411 9.93403C9.0675 10.8006 9.0675 12.2187 9.93411 13.0853L16.3486 19.5L9.93403 25.9146C9.06742 26.7812 9.06742 28.1994 9.93403 29.066ZM19.5 0C30.2695 0 39 8.73047 39 19.5C39 30.2695 30.2695 39 19.5 39C8.73047 39 0 30.2695 0 19.5C0 8.73047 8.73047 0 19.5 0Z" fill="#DC7139" />
          </svg></button>
        </div>
</div>
      


        <div className="Createpopup-main">
          <div className="Createpopup-heading">
            <h2>Enter Quote</h2>
          </div>

          <div className="Createpopup-box-input">
           <div className="Createpopup-box-input-group">
            <input type="text"placeholder="Job Description" 
                required
              onChange={(e)=>setduration(e.target.value)}
            />
           </div>


           <div className="Createpopup-box-input-group">
            <input type="text"placeholder="Job Cost" 
            required
               onChange={(e)=>setcost(e.target.value)}

            />
           </div>

           
           <div className="Createpopup-box-input-group">
            <input type="text"placeholder="How Long Will Job Take?" 
            required
             onChange={(e)=>setjobtime(e.target.value)}
            
            />
           </div>
          </div>

          <div className="Createpopup-btn" >
            <button onClick={()=>handleSubmit()}>
              Submit
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Quotepopup;
