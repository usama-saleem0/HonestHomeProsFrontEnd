import { useState } from "react";
import Vendorogo from "../../assets/Images/ScheduleProjectsimg.png"
import logo from "../../assets/Images/dashlogo.png";
import Drop2 from "../Drop-down/Drop2";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ViewCustomerDetailsPopup from "../Popup-site/Popup2";
import axios from "axios";
import { baseurl } from "../../BaseUrl";
const Dashbordsidebar = () => {
  const CustomerData = [
    {
      id: 1,
      name: "Christopher",
      location: "Arizona Towers, Street 21",
      availability: "Within 2hrs",
      onlineStatus: "Online",
      imgSrc: "path_to_image_1", // replace with actual image path
    },
    {
      id: 2,
      name: "Amanda",
      location: "Sunrise Blvd, Street 42",
      availability: "Within 1hr",
      onlineStatus: "Offline",
      imgSrc: "path_to_image_2", // replace with actual image path
    },

    {
      id: 1,
      name: "Christopher",
      location: "Arizona Towers, Street 21",
      availability: "Within 2hrs",
      onlineStatus: "Online",
      imgSrc: "path_to_image_1", // replace with actual image path
    },
    {
      id: 2,
      name: "Amanda",
      location: "Sunrise Blvd, Street 42",
      availability: "Within 1hr",
      onlineStatus: "Offline",
      imgSrc: "path_to_image_2", // replace with actual image path
    },


    {
      id: 1,
      name: "Christopher",
      location: "Arizona Towers, Street 21",
      availability: "Within 2hrs",
      onlineStatus: "Online",
      imgSrc: "path_to_image_1", // replace with actual image path
    },
    {
      id: 2,
      name: "Amanda",
      location: "Sunrise Blvd, Street 42",
      availability: "Within 1hr",
      onlineStatus: "Offline",
      imgSrc: "path_to_image_2", // replace with actual image path
    },


    {
      id: 1,
      name: "Christopher",
      location: "Arizona Towers, Street 21",
      availability: "Within 2hrs",
      onlineStatus: "Online",
      imgSrc: "path_to_image_1", // replace with actual image path
    },
    {
      id: 2,
      name: "Amanda",
      location: "Sunrise Blvd, Street 42",
      availability: "Within 1hr",
      onlineStatus: "Offline",
      imgSrc: "path_to_image_2", // replace with actual image path
    },
    // Add more objects for additional customers
  ];
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const [data, setdata] = useState('');
  const navigate = useNavigate()

  // Function to toggle popup visibility
  const handleViewClick = (customer) => {
    setIsPopupVisible(true); // Show the popup

    setdata(customer)
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setIsPopupVisible(false); // Hide the popup
  };



  const  { get_matching_customer_data,vendor_profile_data
  } = useSelector((state)=>state.vendorAuth)



console.log(get_matching_customer_data)

const formatTime1 = (timeString) => {
  const [hours, minutes] = timeString.split(":");
  const hour = parseInt(hours, 10);
  const minute = parseInt(minutes, 10);
  const suffix = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${minute < 10 ? "0" + minute : minute} ${suffix}`;
};

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

const [image, setImage] = useState();

// Function to handle image selection
const handleImageChange = (e) => {
  const selectedFile = e.target.files[0];
  if (selectedFile) {
    const imageUrl = URL.createObjectURL(selectedFile);
    setImage(imageUrl);  // Set the selected image URL
  }
};

// Function to trigger file input click
const handleImageClick = () => {
  document.getElementById('imageInput').click();
};

  const handleNavigateChat=(jobid,userid,customername)=>{

    console.log(jobid,userid)

    localStorage.setItem('CustomerName',customername)



    navigate(`/Chat/${jobid}/${userid}`)



  }

  const userid= localStorage.getItem('userId')


  const selectedImageHandle = async (e) => {
    const { files } = e.target;
    try {
      const formData = new FormData();
      formData.append("files", files[0]);
      const response = await axios.post(`${baseurl}/upload-files`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const imagePath = response?.data?.url;
      // Send the image path and user ID to another API to save in the create_vendor table
      await saveImagePathToVendorTable(imagePath, userid);
      // Update state or do any other necessary actions
      setImage(imagePath);
      
      console.log("Response from the backend:", response.data);
    } catch (error) {
      // Handle any errors
      console.error("Error:", error);
    }
  };
  const saveImagePathToVendorTable = async (imagePath, userId) => {
    try {
      const response = await axios.post(
        `${baseurl}/save-image-path`,
        { imagePath, userId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response from save-image-path API:", response.data);
      window.location.reload()
    } catch (error) {
      console.error("Error saving image path to vendor table:", error);
    }
  };

  return (
    <>
      <div className="sidebar-dashbord-main">

        <div className="sidebar-part-1-box">

          <div className="Vendor-id">
          <div className="Vendor-id-box">
      <div className="Vendor-id-img" onClick={selectedImageHandle} style={{ cursor: 'pointer' }}>
        {/* Display selected image or placeholder */}
        <img src={ vendor_profile_data?.Profile_Image!="asd"?vendor_profile_data?.Profile_Image:logo} alt="Vendor Logo" />
        
      <div className="imagedd">

<input
  type="file"
  id="imageInput"
  style={{ display: 'none' }}
  accept="image/*"
  onChange={selectedImageHandle}
/>


</div>
      </div>
      <span>
        <h2>{vendor_profile_data?.Name}</h2>
        <p>Vendor</p>
      </span>

      {/* Hidden file input */}

    </div>

            <div className="setting-box">
              <Drop2/>
            </div>
          </div>

          <div className="Matching-Vendor">
            <p>Matching Leads</p>
            <h2>{get_matching_customer_data && get_matching_customer_data[0]?.jobs?.length}</h2>

            <div className="Matching-Vendor-box">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <g clip-path="url(#clip0_104_678)">
                  <path d="M11.083 5.24992C10.5288 5.24992 10.0476 5.08464 9.63926 4.75409C9.23092 4.42353 8.9587 4.00547 8.82259 3.49992H5.16217C5.05523 3.90825 4.8534 4.26078 4.55667 4.5575C4.25995 4.85422 3.90762 5.05586 3.49967 5.16242V8.82283C4.00523 8.95895 4.42329 9.23117 4.75384 9.6395C5.0844 10.0478 5.24967 10.5291 5.24967 11.0833C5.24967 11.7249 5.0212 12.2742 4.56426 12.7312C4.10731 13.1881 3.55801 13.4166 2.91634 13.4166C2.27467 13.4166 1.72537 13.1881 1.26842 12.7312C0.81148 12.2742 0.583008 11.7249 0.583008 11.0833C0.583008 10.5291 0.748286 10.0478 1.07884 9.6395C1.4094 9.23117 1.82745 8.95895 2.33301 8.82283V5.16242C1.82745 5.02631 1.4094 4.75409 1.07884 4.34575C0.748286 3.93742 0.583008 3.46103 0.583008 2.91659C0.583008 2.27492 0.81148 1.72561 1.26842 1.26867C1.72537 0.811724 2.27467 0.583252 2.91634 0.583252C3.46079 0.583252 3.93717 0.74853 4.34551 1.07909C4.75384 1.40964 5.02606 1.8277 5.16217 2.33325H8.82259C8.9587 1.8277 9.23092 1.40964 9.63926 1.07909C10.0476 0.74853 10.5288 0.583252 11.083 0.583252C11.7247 0.583252 12.274 0.811724 12.7309 1.26867C13.1879 1.72561 13.4163 2.27492 13.4163 2.91659C13.4163 3.55825 13.1879 4.10756 12.7309 4.5645C12.274 5.02145 11.7247 5.24992 11.083 5.24992ZM2.91634 12.2499C3.23717 12.2499 3.51192 12.1333 3.74059 11.8999C3.96926 11.6666 4.0834 11.3944 4.08301 11.0833C4.08301 10.7624 3.96867 10.4877 3.74001 10.259C3.51134 10.0303 3.23679 9.9162 2.91634 9.91658C2.60523 9.91658 2.33301 10.0309 2.09967 10.2596C1.86634 10.4883 1.74967 10.7628 1.74967 11.0833C1.74967 11.3944 1.86634 11.6666 2.09967 11.8999C2.33301 12.1333 2.60523 12.2499 2.91634 12.2499ZM2.91634 4.08325C3.23717 4.08325 3.51192 3.96892 3.74059 3.74025C3.96926 3.51159 4.0834 3.23703 4.08301 2.91659C4.08301 2.59575 3.96867 2.321 3.74001 2.09234C3.51134 1.86367 3.23679 1.74953 2.91634 1.74992C2.60523 1.74992 2.33301 1.86425 2.09967 2.09292C1.86634 2.32159 1.74967 2.59614 1.74967 2.91659C1.74967 3.23742 1.86634 3.51217 2.09967 3.74084C2.33301 3.9695 2.60523 4.08364 2.91634 4.08325ZM11.083 13.4166C10.4413 13.4166 9.89203 13.1881 9.43509 12.7312C8.97815 12.2742 8.74967 11.7249 8.74967 11.0833C8.74967 10.4416 8.97815 9.89228 9.43509 9.43533C9.89203 8.97839 10.4413 8.74992 11.083 8.74992C11.7247 8.74992 12.274 8.97839 12.7309 9.43533C13.1879 9.89228 13.4163 10.4416 13.4163 11.0833C13.4163 11.7249 13.1879 12.2742 12.7309 12.7312C12.274 13.1881 11.7247 13.4166 11.083 13.4166ZM11.083 12.2499C11.4038 12.2499 11.6786 12.1333 11.9073 11.8999C12.1359 11.6666 12.2501 11.3944 12.2497 11.0833C12.2497 10.7624 12.1353 10.4877 11.9067 10.259C11.678 10.0303 11.4035 9.9162 11.083 9.91658C10.7622 9.91658 10.4874 10.0309 10.2588 10.2596C10.0301 10.4883 9.91595 10.7628 9.91634 11.0833C9.91634 11.3944 10.0307 11.6666 10.2593 11.8999C10.488 12.1333 10.7626 12.2499 11.083 12.2499ZM11.083 4.08325C11.4038 4.08325 11.6786 3.96892 11.9073 3.74025C12.1359 3.51159 12.2501 3.23703 12.2497 2.91659C12.2497 2.59575 12.1353 2.321 11.9067 2.09234C11.678 1.86367 11.4035 1.74953 11.083 1.74992C10.7622 1.74992 10.4874 1.86425 10.2588 2.09292C10.0301 2.32159 9.91595 2.59614 9.91634 2.91659C9.91634 3.23742 10.0307 3.51217 10.2593 3.74084C10.488 3.9695 10.7626 4.08364 11.083 4.08325Z" fill="#002758" />
                </g>
                <defs>
                  <clipPath id="clip0_104_678">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
                <p>{get_matching_customer_data && get_matching_customer_data[0]?.jobs?.length} services</p>
              </span>


              {/* <button>Filter</button> */}
            </div>
          </div>

        </div>

        <div className="sidebar-part-2-box">
          <h3>Matching Leads</h3>
        </div>



        <div className="sidebar-part-3-box">
      {get_matching_customer_data && get_matching_customer_data[0]?.jobs?.map((customer,i) => (
        <div className="Christopher-card-box" key={i}>
          <div className="Christopher-list-1">
            <h2>{customer?.userDetails?.Name}</h2>
            <button>{customer?.onlineStatus}</button>
          </div>

          <div className="Christopher-list-2">
            <p>Customer</p>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.29199 8.33333C7.29199 7.61504 7.57733 6.92616 8.08525 6.41825C8.59316 5.91034 9.28203 5.625 10.0003 5.625C10.7186 5.625 11.4075 5.91034 11.9154 6.41825C12.4233 6.92616 12.7087 7.61504 12.7087 8.33333C12.7087 9.05163 12.4233 9.7405 11.9154 10.2484C11.4075 10.7563 10.7186 11.0417 10.0003 11.0417C9.28203 11.0417 8.59316 10.7563 8.08525 10.2484C7.57733 9.7405 7.29199 9.05163 7.29199 8.33333Z" fill="#F37B3C" />
                <path fillRule="evenodd" clipRule="evenodd" d="M3.14462 7.3975C3.28286 5.72215 4.04599 4.16003 5.28252 3.02121C6.51905 1.8824 8.13858 1.25016 9.81962 1.25H10.1796C11.8607 1.25016 13.4802 1.8824 14.7167 3.02121C15.9533 4.16003 16.7164 5.72215 16.8546 7.3975C17.0091 9.26791 16.4316 11.1253 15.2438 12.5783L11.2496 17.4633C11.0982 17.6486 10.9075 17.7979 10.6914 17.9005C10.4752 18.003 10.2389 18.0562 9.99962 18.0562C9.76035 18.0562 9.52407 18.003 9.30789 17.9005C9.0917 17.7979 8.90101 17.6486 8.74962 17.4633L4.75629 12.5783C3.56821 11.1254 2.99042 9.26802 3.14462 7.3975ZM9.99962 4.375C8.94981 4.375 7.94299 4.79204 7.20066 5.53437C6.45833 6.2767 6.04129 7.28352 6.04129 8.33333C6.04129 9.38315 6.45833 10.39 7.20066 11.1323C7.94299 11.8746 8.94981 12.2917 9.99962 12.2917C11.0494 12.2917 12.0563 11.8746 12.7986 11.1323C13.5409 10.39 13.958 9.38315 13.958 8.33333C13.958 7.28352 13.5409 6.2767 12.7986 5.53437C12.0563 4.79204 11.0494 4.375 9.99962 4.375Z" fill="#F37B3C" />
              </svg>
              <p>{customer?.jobs?.location}</p>
            </span>

            {
                    (customer?.jobs?.amount !="" &&  customer?.jobs?.amount !="T,," && !customer?.jobs?.emergency)  &&
                    <p>Availability: {customer?.jobs?.amount && DateFormatCustom(customer?.jobs?.amount.split('T')[0])} {customer?.jobs?.amount && formatTime1(customer?.jobs?.amount.split('T')[1])}</p>

                  }
                  {
                    ( (customer?.jobs?.amount !="" ||  customer?.jobs?.amount !="T,,"  ) && !customer?.jobs?.emergency && (customer?.jobs?.selected_queries!='Cleaning' &&customer?.jobs?.selected_queries!='Landscaping' )) && 
                     <>
                     <p>Availability </p>

                      {   customer?.jobs?.availablity_time?.map((e,i)=>(

                        <div key={i}>
                          <p>
                            {DateFormatCustom(e?.date)}  {e?.times[0]!=""?formatTime1(e?.times[0]):''}
                          </p>
                        
                        </div>

                      ))

                      }

                     
                     </>


                    

                  }




{
                    (  customer?.jobs?.emergency) && 
                     <>
                     <p>Emergency </p>

                     <p>
                      {customer?.jobs?.note}
                     </p>

                      

                     
                     </>


                    

                  }



            
          </div>

          <div className="Christopher-list-btn-box">
           
        <button onClick={()=>handleNavigateChat(customer?.jobs?._id,customer?.jobs?.user_id,customer?.userDetails?.Name)}>Chat Now</button>

             
         
        <button className="View-list" onClick={()=>handleViewClick(customer)}>
          View
        </button>
      </div>
        </div>
      ))}
    </div>
      </div>



      {/* Conditionally render the Popup2 component */}
      {isPopupVisible && (
        <div className="popup-View-box">
          <ViewCustomerDetailsPopup handleClose={handleClosePopup} profiledata={data}/>
        </div>
      )}

    </>
  );
};

export default Dashbordsidebar;
