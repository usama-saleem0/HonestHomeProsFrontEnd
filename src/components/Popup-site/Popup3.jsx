// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import logo from "../../assets/Images/dashlogo.png";
// const Popup3 = ({ handleClose }) => {


//   return (
//     <>
//       <div className="Popup1-site">

//         <div className="Popup1-heading">
//           <div className="Popup1-head-logo">
//             <img src={logo} alt="" />
//           </div>


//           <div className="Popup1-head-icon" onClick={handleClose}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
//               <path fillRule="evenodd" clipRule="evenodd" d="M9.93403 29.066C10.8006 29.9326 12.2188 29.9326 13.0854 29.066L19.5 22.6514L25.9146 29.066C26.7812 29.9326 28.1993 29.9326 29.0659 29.066C29.9325 28.1994 29.9325 26.7813 29.0659 25.9146L22.6514 19.5L29.066 13.0854C29.9326 12.2188 29.9326 10.8007 29.066 9.93411C28.1994 9.0675 26.7813 9.0675 25.9146 9.93411L19.5 16.3486L13.0854 9.93403C12.2188 9.06742 10.8007 9.06742 9.93411 9.93403C9.0675 10.8006 9.0675 12.2187 9.93411 13.0853L16.3486 19.5L9.93403 25.9146C9.06742 26.7812 9.06742 28.1994 9.93403 29.066ZM19.5 0C30.2695 0 39 8.73047 39 19.5C39 30.2695 30.2695 39 19.5 39C8.73047 39 0 30.2695 0 19.5C0 8.73047 8.73047 0 19.5 0Z" fill="#DC7139" />
//             </svg>
//           </div>
//         </div>

//         <div className="popup3-box-body">

//           <div className="popup3-box-body-tital">
//             <h2>Get Insurance</h2>
//             <p>Protect what matters most with reliable insurance for a secure future</p>
//           </div>

//           <div className="popup3-box-body-input-box">

//             <div className="popup3-box-body-input-group">
//               <label htmlFor="">Insurance Provider *</label>
//               <input type="text" />
//             </div>

//             <div className="popup3-box-body-input-group">
//               <label htmlFor="">Policy Number *</label>
//               <input type="number" />
//             </div>

//             <div className="popup3-box-body-input-group">
//               <label htmlFor="">Type Of Insurance *</label>
//               <input type="text" />
//             </div>

//             <div className="popup3-box-body-input-group">
//               <label htmlFor="">Coverage Limits *</label>
//               <input type="text" />
//             </div>

//             <div className="popup3-box-body-input-group">
//               <label htmlFor="">Policy Effective Date *</label>
//               <input type="text" />
//             </div>

//             <div className="popup3-box-body-input-group">
//               <label htmlFor="">Policy Expiration Date *</label>
//               <input type="text" />
//             </div>




//           </div>

//           <div className="popup3-box-body-read-line">
//             <h2>Note: If you don't have an insurance you can get one here</h2>
//             <a >Click Here</a>
//           </div>

//           <div className="popup3-box-body-btn-box">
//             <button>
//             Submit
//             </button>
//           </div>

//         </div>
        
//       </div>
//     </>
//   );
// };

// export default Popup3;










import { useState } from "react";
import logo from "../../assets/Images/dashlogo.png";
import { useDispatch, useSelector } from "react-redux";
import { post_insurance_data } from "../../Redux/Features/vendorService";
import { ToastContainer } from "react-toastify";

const Popup3 = ({ handleClose }) => {

  const dispatch = useDispatch()

  const userid= localStorage.getItem('userId')

  // Define a single state to manage all input values
  const [formData, setFormData] = useState({
    id:userid,
    provider: "",
    policyNumber: "",
    insuranceType: "",
    coverageLimits: "",
    effectiveDate: "",
    expirationDate: ""
  });

  // Handle input change for all fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  
  const  { post_insurance_data_status
  } = useSelector((state)=>state.vendorAuth)

  console.log(post_insurance_data_status,"statuss")



  const handleSubmit = async(e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData);

 const result=  await  dispatch(post_insurance_data(formData))

 console.log(result.meta.requestStatus,"result")

     if(result.meta.requestStatus==="fulfilled")
     {
      console.log('here')
      setTimeout(() => {
        handleClose()
        
      }, 1000);
     }



  };

  return (
    <>
    <ToastContainer/>
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

        <div className="popup3-box-body">
          <div className="popup3-box-body-tital">
            <h2>Get Insurance</h2>
            <p>Protect what matters most with reliable insurance for a secure future</p>
          </div>
          <form onSubmit={handleSubmit}>


         

          <div className="popup3-box-body-input-box">
            <div className="popup3-box-body-input-group">
              <label>Insurance Provider *</label>
              <input
                type="text"
                name="provider"
                value={formData.provider}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="popup3-box-body-input-group">
              <label>Policy Number *</label>
              <input
                type="number"
                name="policyNumber"
                value={formData.policyNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="popup3-box-body-input-group">
              <label>Type Of Insurance *</label>
              <input
                type="text"
                name="insuranceType"
                value={formData.insuranceType}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="popup3-box-body-input-group">
              <label>Coverage Limits *</label>
              <input
                type="text"
                name="coverageLimits"
                value={formData.coverageLimits}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="popup3-box-body-input-group">
              <label>Policy Effective Date *</label>
              <input
                type="text"
                name="effectiveDate"
                value={formData.effectiveDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="popup3-box-body-input-group">
              <label>Policy Expiration Date *</label>
              <input
                type="text"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="popup3-box-body-read-line">
            <h2>Note: If you don't have an insurance you can get one here</h2>
            <a>Click Here</a>
          </div>

          <div className="popup3-box-body-btn-box">
            <button >Submit</button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Popup3;
