// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import logo from "../../assets/Images/dashlogo.png";
// const Popup4 = ({ handleClose }) => {


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
//             <h2>Create Profile</h2>
//             <p>Share your interests, current content, host discussions, and more.</p>
//           </div>
          
//           <div className="main-popup3-box-body-drop-down">
//             <div className="popup3-box-body-drop-down">
//               <input type="file" />
//               <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
//                 <path d="M49 28H28V49H21V28H0V21H21V0H28V21H49V28Z" fill="#F37B3C" fill-opacity="0.6" />
//               </svg>
//             </div>
//           </div>


//           <div className="popup3-box-body-input-box">

//             <div className="popup3-box-body-input-group">
//               <label htmlFor="">Title*</label>
//               <input type="text" />
//             </div>

//             <div className="popup3-box-body-input-group">
//               <label htmlFor="">Brief Descriptionr *</label>
//               <input type="text" />
//             </div>

//             <div className="popup3-box-body-input-group">
//               <label htmlFor="">Fluent English *</label>
//               <input type="text" />
//             </div>

//             <div className="popup3-box-body-input-group">
//               <label htmlFor="">License Type/Number? *</label>
//               <input type="number" />
//             </div>

//             <div className="popup3-box-body-input-group">
//               <label htmlFor="">Travelling Cost *</label>
//               <input type="text" />
//             </div>






//           </div>

//           <br />
//           <br />
//           <div className="popup3-box-body-btn-box">
//             <button>
//               Create Now
//             </button>
//           </div>

//         </div>

//       </div>
//     </>
//   );
// };

// export default Popup4;




import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Images/dashlogo.png";
import { cloudinaryUpload } from "../../cloudinaryUpload/cloudinaryUpload";
import { useDispatch } from "react-redux";
import { create_customer_gig_async_service, get_customer_gig_async_service } from "../../Redux/Features/vendorService";
import { ToastContainer } from "react-toastify";

const Popup4 = ({ handleClose }) => {

  const dispatch = useDispatch()

  const userid= localStorage.getItem('userId')


  const getVendorGigByID=()=>{

    const formData={
        vender_id:userid
    }
    dispatch(get_customer_gig_async_service(formData))

}


  // Define a single state to store all form inputs
  const [formData, setFormData] = useState({
    vender_id:userid,
    gig_title: '',
    gig_discription: '',
    fluent_english: '',
    license_type: '',
    travelling_cost: '',
    gig_image: null
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };



  const handleFileChange = async (e) => {
    e.preventDefault();
    try {
      const files = Array.from(e.target.files);

      for (const file of files) {
        const image = await cloudinaryUpload(file);
        console.log(image, "Image");
       
        setFormData((prev) => ({
          ...prev,
          gig_image: image,
        }));
      }
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
  };



  const handleSubmit = async(e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData);

    //  dispatch(create_customer_gig_async_service(formData))

    dispatch(create_customer_gig_async_service(formData)).then((result) => {
      if (result.type === 'CREATE_GIG/fulfilled') {
        getVendorGigByID()
        handleClose()
        console.log("profile_deleted")
        // Call your callback function here
        
      }
    });



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
            <button><svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.93403 29.066C10.8006 29.9326 12.2188 29.9326 13.0854 29.066L19.5 22.6514L25.9146 29.066C26.7812 29.9326 28.1993 29.9326 29.0659 29.066C29.9325 28.1994 29.9325 26.7813 29.0659 25.9146L22.6514 19.5L29.066 13.0854C29.9326 12.2188 29.9326 10.8007 29.066 9.93411C28.1994 9.0675 26.7813 9.0675 25.9146 9.93411L19.5 16.3486L13.0854 9.93403C12.2188 9.06742 10.8007 9.06742 9.93411 9.93403C9.0675 10.8006 9.0675 12.2187 9.93411 13.0853L16.3486 19.5L9.93403 25.9146C9.06742 26.7812 9.06742 28.1994 9.93403 29.066ZM19.5 0C30.2695 0 39 8.73047 39 19.5C39 30.2695 30.2695 39 19.5 39C8.73047 39 0 30.2695 0 19.5C0 8.73047 8.73047 0 19.5 0Z" fill="#DC7139" />
            </svg></button>
          </div>
        </div>

        <div className="popup3-box-body">
          <div className="popup3-box-body-tital">
            <h2>Create Profile</h2>
            <p>Share your interests, current content, host discussions, and more.</p>
          </div>

          <div className="main-popup3-box-body-drop-down">
            <div className="popup3-box-body-drop-down">
              <input 
                type="file" 
                name="file" 
                onChange={handleFileChange}
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                <path d="M49 28H28V49H21V28H0V21H21V0H28V21H49V28Z" fill="#F37B3C" fillOpacity="0.6" />
              </svg>

              {
          formData.gig_image!=null &&
          <div className="image_container"> 

            <img
            src={formData.gig_image}
            
            
            />

            </div>
            


      }
            </div>
            

          </div>
    <form onSubmit={handleSubmit}>


    
          <div className="popup3-box-body-input-box">
            <div className="popup3-box-body-input-group">
              <label htmlFor="title">Title*</label>
              <input 
                type="text" 
                name="gig_title" 
                value={formData.gig_title} 
                onChange={handleChange} 
                required
              />

            </div>

            <div className="popup3-box-body-input-group">
              <label htmlFor="description">Brief Description *</label>
              <input 
                type="text" 
                name="gig_discription" 
                value={formData.gig_discription} 
                onChange={handleChange} 
                required
              />
            </div>

            <div className="popup3-box-body-input-group">
              <label htmlFor="fluentEnglish">Fluent English *</label>
              <input 
                type="text" 
                name="fluent_english" 
                value={formData.fluent_english} 
                onChange={handleChange} 
                required
              />
            </div>

            <div className="popup3-box-body-input-group">
              <label htmlFor="licenseNumber">License Type/Number  </label>
              <input 
                type="text" 
                name="license_type" 
                value={formData.license_type} 
                onChange={handleChange} 
                
              />
            </div>

            <div className="popup3-box-body-input-group">
              <label htmlFor="travelingCost">Traveling Cost *</label>
              <input 
                type="text" 
                name="travelling_cost" 
                value={formData.travelling_cost} 
                onChange={handleChange} 
                required
              />
            </div>
          </div>

          <br />
          <br />
          <div className="popup3-box-body-btn-box">
            <button >
              Create Now
            </button>
          </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default Popup4;
