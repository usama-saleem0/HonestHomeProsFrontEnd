import { useState } from "react";
import Profileimg from "../../assets/Images/Profile-img.png"
import Popup3 from "../Popup-site/Popup3";
import Popup4 from "../Popup-site/Popup4";
import { useDispatch, useSelector } from "react-redux";
import { delete_vendor_gig, get_customer_gig_async_service } from "../../Redux/Features/vendorService";
import { ToastContainer } from "react-toastify";
const Profile = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopupVisible1, setIsPopupVisible1] = useState(false);
  // Function to toggle popup visibility
  const handleViewClick = () => {
    setIsPopupVisible(true); // Show the popup
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setIsPopupVisible(false); // Hide the popup
  };


  const handleViewClick1 = () => {
    setIsPopupVisible1(true); // Show the popup
  };

  // Function to close the popup
  const handleClosePopup1 = () => {
    setIsPopupVisible1(false); // Hide the popup
  };

  const userid= localStorage.getItem('userId')

  const getVendorGigByID=()=>{

    const formData={
        vender_id:userid
    }
    dispatch(get_customer_gig_async_service(formData))

}



  const  {  
    get_customer_gig_data
  } = useSelector((state)=>state.vendorAuth)


    console.log(get_customer_gig_data,"profile")

    const dispatch = useDispatch()


  const handleDeleteGig=(id)=>{

      const formData={
        _id:id
      }

      // dispatch(delete_vendor_gig(formData))

      dispatch(delete_vendor_gig(formData)).then((result) => {
        if (result.type === 'delete_vendor_gig/fulfilled') {
        
          console.log("profile_deleted")
          // Call your callback function here
          getVendorGigByID()
          
        }
      });



  }




  return (
    <>
    <ToastContainer/>
    <div className="Schedule-Projects-sec">
      <div className="Schedule-Projects-main">
        <div className="Schedule-Projects-tital">
          <h2>Profile</h2>
          <div className="get-btn-box">

            <button onClick={handleViewClick}>Get Insurance</button>
            <button onClick={handleViewClick1}>Create Profile</button>
          </div>

        </div>

        <div className="Schedule-Projects-card-box">

{
    get_customer_gig_data?.map((e,i)=>(
      <div className="Create-Profile-card" key={i}>
      <div className="Create-Profile-card-tital">
        <h2>{e?.gig_title}</h2>
        
        <p>Description: {e?.gig_discription}</p>
        <p>License Type: {e?.license_type}</p>
        <p>Fluent English : {e?.fluent_english}</p>
        <p>Travelling Cost: {e?.travelling_cost}</p>

        <div className="Profile-Edit-box">
          {/* <button className="Edit-Profile">Edit</button> */}
          <button onClick={()=>handleDeleteGig(e?._id)}>Delete</button>
        </div>
      </div>

      <div className="Create-Profile-card-img">
        <img src={e?.gig_image} alt="" />
      </div>
    </div>



    ))
          

}


        
        </div>

 
      </div>
    </div>


         {/* Conditionally render the Popup2 component */}
         {isPopupVisible && (
        <div className="popup-View-box">
          <Popup3 handleClose={handleClosePopup} />
        </div>
      )}

               {/* Conditionally render the Popup2 component */}
               {isPopupVisible1 && (
        <div className="popup-View-box">
          <Popup4 handleClose={handleClosePopup1} />
        </div>
      )}
    </>
  );
};

export default Profile;
