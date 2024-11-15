import { useSelector } from "react-redux";
import ScheduleProjectsimg from "../../assets/Images/ScheduleProjectsimg.png"
import ViewScheduleDetailsPopup from "../Popup-site/ViewScheduleDetailsPopup";
import { useState } from "react";
import logo from "../../assets/Images/dashlogo.png";
const ScheduleProjects = () => {

  const  { get_schedule_status,
    get_schedule_data,
    get_schedule_error,
  } = useSelector((state)=>state.vendorAuth)


  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Function to close the popup
  const handleClosePopup = () => {
    setIsPopupVisible(false); // Hide the popup
  };

  
  const [data, setdata] = useState('');

  // Function to toggle popup visibility
  const handleViewClick = (customer) => {
    setIsPopupVisible(true); // Show the popup

    setdata(customer)
  };

  console.log(get_schedule_data,"SCHEDULE DATA")
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





  const ScheduleProjectsData = [
    {
      id: 1,
      name: "George Wrangler",
      role: "Customer",
      availability: "02:02",
      location: "US",
      problem: "Leakage",
      status: "Waiting For Response",
      imgSrc: ScheduleProjectsimg, // replace with actual image path
    },
    // Add 4 more objects for 5 cards
    {
      id: 2,
      name: "Anna Smith",
      role: "Customer",
      availability: "03:45",
      location: "UK",
      problem: "Power Outage",
      status: "In Progress",
      imgSrc: ScheduleProjectsimg, // replace with actual image path
    },



    {
      id: 3,
      name: "Anna Smith",
      role: "Customer",
      availability: "03:45",
      location: "UK",
      problem: "Power Outage",
      status: "In Progress",
      imgSrc: ScheduleProjectsimg, // replace with actual image path
    },




    {
      id: 4,
      name: "Anna Smith",
      role: "Customer",
      availability: "03:45",
      location: "UK",
      problem: "Power Outage",
      status: "In Progress",
      imgSrc: ScheduleProjectsimg, // replace with actual image path
    },


    {
      id: 5,
      name: "Anna Smith",
      role: "Customer",
      availability: "03:45",
      location: "UK",
      problem: "Power Outage",
      status: "In Progress",
      imgSrc: ScheduleProjectsimg, // replace with actual image path
    },


    {
      id: 6,
      name: "Anna Smith",
      role: "Customer",
      availability: "03:45",
      location: "UK",
      problem: "Power Outage",
      status: "In Progress",
      imgSrc: ScheduleProjectsimg, // replace with actual image path
    },


    {
      id: 7,
      name: "Anna Smith",
      role: "Customer",
      availability: "03:45",
      location: "UK",
      problem: "Power Outage",
      status: "In Progress",
      imgSrc: ScheduleProjectsimg, // replace with actual image path
    },

    {
      id: 8,
      name: "Anna Smith",
      role: "Customer",
      availability: "03:45",
      location: "UK",
      problem: "Power Outage",
      status: "In Progress",
      imgSrc: ScheduleProjectsimg, // replace with actual image path
    },
    // ...
  ];

  return (
    <>
    <div className="Schedule-Projects-sec">
      <div className="Schedule-Projects-main">
        <div className="Schedule-Projects-tital">
          <h2>Schedule Projects</h2>
        </div>

        <div className="Schedule-Projects-card-box">
      {get_schedule_data?.map((project,i) => (
        <div className="Schedule-Projects-card" key={i}>
          <div className="Schedule-Projects-card-id-box">
            <div className="Schedule-Projects-part-1">
              <div className="Schedule-Projects-imger">
                <img src={project?.gig_image?project?.gig_image:logo} alt={project.name} />
              </div>
              <div className="Schedule-Projects-card-id">
                <h2>{project?.Vendor_Name}</h2>
                <h3>Customer</h3>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.0003 6.80764C12.0003 6.65463 11.9395 6.50788 11.8313 6.39969C11.7231 6.2915 11.5764 6.23071 11.4234 6.23071C11.2704 6.23071 11.1236 6.2915 11.0154 6.39969C10.9072 6.50788 10.8465 6.65463 10.8465 6.80764V13.1538C10.8465 13.2555 10.8734 13.3554 10.9245 13.4433C10.9755 13.5312 11.0489 13.6041 11.1372 13.6546L15.1757 15.9623C15.3082 16.0339 15.4635 16.0508 15.6084 16.0095C15.7532 15.9681 15.8762 15.8717 15.9509 15.7409C16.0256 15.6101 16.0463 15.4553 16.0083 15.3095C15.9704 15.1637 15.877 15.0385 15.748 14.9607L12.0003 12.8192V6.80764Z"
                      fill="#F37B3C"
                    />
                    <path
                      d="M12.0003 21.2308C14.4485 21.2308 16.7963 20.2583 18.5274 18.5272C20.2585 16.7961 21.2311 14.4482 21.2311 12.0001C21.2311 9.5519 20.2585 7.20402 18.5274 5.47292C16.7963 3.74181 14.4485 2.76929 12.0003 2.76929C9.55215 2.76929 7.20427 3.74181 5.47316 5.47292C3.74206 7.20402 2.76953 9.5519 2.76953 12.0001C2.76953 14.4482 3.74206 16.7961 5.47316 18.5272C7.20427 20.2583 9.55215 21.2308 12.0003 21.2308ZM20.0772 12.0001C20.0772 14.1422 19.2263 16.1966 17.7115 17.7113C16.1968 19.226 14.1424 20.077 12.0003 20.077C9.85817 20.077 7.80377 19.226 6.28905 17.7113C4.77434 16.1966 3.92338 14.1422 3.92338 12.0001C3.92338 9.85792 4.77434 7.80353 6.28905 6.28881C7.80377 4.77409 9.85817 3.92313 12.0003 3.92313C14.1424 3.92313 16.1968 4.77409 17.7115 6.28881C19.2263 7.80353 20.0772 9.85792 20.0772 12.0001Z"
                      fill="#F37B3C"
                    />
                  </svg>
                  {/* {
                    (project?.cleaning_maintainance_date===""|| project?.cleaning_maintainance_date ==="T,,")&&
                    <p>Availability: {DateFormatCustom(project?.date)} {formatTime1(project?.time)}</p>

                  } */}
                    {
                    (project?.cleaning_maintainance_date !="" &&  project?.cleaning_maintainance_date !="T,,")  &&
                    <p>Availability: {project?.cleaning_maintainance_date && DateFormatCustom(project?.cleaning_maintainance_date.split('T')[0])} {project?.cleaning_maintainance_date && formatTime1(project?.cleaning_maintainance_date.split('T')[1])}</p>

                  }
                </span>
              </div>
            </div>
            <div className="Schedule-Projects-part-2">
              <h5>Location: {project?.customerJobDetails?.location} </h5>
              <h5>Problem: {project?.customerJobDetails?.selected_queries} </h5>
            </div>
          </div>

          {
              project?.status==="pending" && 
          <div className="Schedule-Projects-last-btn" >
            {/* <span style={{backgroundColor:'red',borderColor:'red'}}>{project?.status}</span> */}
            <span style={{backgroundColor:'red',borderColor:'red'}}>{'Vendor Selection Pending'}</span>
            <button onClick={()=>handleViewClick(project)}>View</button>
          </div>

          }

{
              project?.status==="accepted" && 
          <div className="Schedule-Projects-last-btn" >
            {/* <span  >Home Visit</span> */}
            <span  >Quote Pending</span>
            <button onClick={()=>handleViewClick(project)}>View</button>
          </div>

          }


{
              project?.status==="selected" && 
          <div className="Schedule-Projects-last-btn" >
            <span style={{backgroundColor:'#1AA168',borderColor:'#1AA168'}}>Job Confirmed</span>
            <button onClick={()=>handleViewClick(project)}>View</button>
          </div>

          }

       
        </div>
      ))}
    </div>
      </div>
    </div>

    {isPopupVisible && (
        <div className="popup-View-box">
          <ViewScheduleDetailsPopup handleClose={handleClosePopup} scheduledata={data}/>
        </div>
      )}
    </>
  );
};

export default ScheduleProjects;
