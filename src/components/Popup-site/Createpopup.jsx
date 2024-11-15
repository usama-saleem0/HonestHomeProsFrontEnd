import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Images/dashlogo.png";
import { useDispatch, useSelector } from "react-redux";
import { create_schedule_async_service } from "../../Redux/Features/vendorService";
import { toast, ToastContainer } from "react-toastify";
import DateTimePicker from "../UniversalComponents/DateTimePicker";
const Createpopup = ({ handleClose ,handleSendPickTimeMessage}) => {

    const dispatch = useDispatch()

  const  {  
    get_single_job_details_data
  } = useSelector((state)=>state.vendorAuth)

  console.log(get_single_job_details_data,"getsingle")

  const vendorUserID= localStorage.getItem('userId')


  const DateFormatCustom=(date)=>{


    let x= date.trim()

const month=['ts','January','February','March','April','May','June','July','August','September','October','November','December']

const mm= x.split('-')[1]

const yy=x.split('-')[0]

const dd= x.split('-')[2]


const y= mm[0].includes('0')?mm.split('0')[1]:mm

// console.log(y)

// final_date= month[y]+" "+ dd+" "+ yy

const final_date= month[y]+" "+ dd+" "+ yy

return final_date

// console.log(dd,month[y],yy)



}
  
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    const suffix = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute < 10 ? '0' + minute : minute} ${suffix}`;
  };
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null); // To track selected time index
  const [date, setdate] = useState(null); 
  const [time, settime] = useState(null); 

  const handleTimePress = (index,date,time) => {
    setSelectedTimeIndex(index); // Set the pressed time index

    console.log(date,time,"POPO")
    setdate(date)
    settime(time)


  };

    const [userid,setuserid]=useState()
  useEffect(() => {
   
    const fetchData = async () => {
        try {
        
         

            const UserId = await AsyncStorage.getItem('userId');

    
            

                    
                    setuserid(UserId)
            
           

            
             
        } catch (error) {
            console.error('Error fetching data from AsyncStorage:', error);
        }
    };

    fetchData();
}, []);
 

 
  const formData={
    vendorId:vendorUserID,
    customerId:get_single_job_details_data?.UserDetails?._id,
    jobId:get_single_job_details_data?.JobDetails?._id,
    customerJobDetails:get_single_job_details_data?.JobDetails,
    customerDetails:get_single_job_details_data?.UserDetails,
    status:'pending',
    Paystatus:'unPaid',
    vendorBudget:'0',
    time:time,
    date:date,
    shedule_descriptions:''
  }


  const handleSubmit=()=>{
    console.log(formData,"SCHEDKE")
    if(formData.date!=null)
    {


      // dispatch(create_schedule_async_service(formData))

      dispatch(create_schedule_async_service(formData)).then((result) => {
        if (result.type === 'CREATE_SCHEDULE/fulfilled') {
          handleClose()
          console.log("profile_deleted")
          // Call your callback function here
          handleSendPickTimeMessage(formData)
          
        }
      });

    }
    else{
      toast.error("Please Select Date and Time")

    }
  

  }


  const formData2={
    vendorId:vendorUserID,
    customerId:get_single_job_details_data?.UserDetails?._id,
    jobId:get_single_job_details_data?.JobDetails?._id,
    customerJobDetails:get_single_job_details_data?.JobDetails,
    customerDetails:get_single_job_details_data?.UserDetails,
    status:'pending',
    Paystatus:'unPaid',
    vendorBudget:'0',
    time:time,
    date:date,
    shedule_descriptions:''
  }


  const handleCleaningLandscaping=()=>{

    if(formData2.date!=null)
      {
  
        // dispatch(create_schedule_async_service(formData2))

        dispatch(create_schedule_async_service(formData2)).then((result) => {
          if (result.type === 'CREATE_SCHEDULE/fulfilled') {
            handleClose()
            console.log("profile_deleted")

            handleSendPickTimeMessage(formData2)
            // Call your callback function here
            
          }
        });
  
      }
      else{
        toast.error("Please Select Date and Time")
  
      }
  }


  const handleDateTimeEmergencyCallBack=(dateTime)=>{

    console.log(dateTime,"CAlL")

    const date1= dateTime.split('T')[0]
    const time1= dateTime.split('T')[1]


    setdate(date1)
    settime(time1)
  }



  return (
    <>


      <div className="Createpopup">
<div className="more-icon-site">
<div className="Popup1-head-icon" onClick={handleClose}>
         <button> <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.93403 29.066C10.8006 29.9326 12.2188 29.9326 13.0854 29.066L19.5 22.6514L25.9146 29.066C26.7812 29.9326 28.1993 29.9326 29.0659 29.066C29.9325 28.1994 29.9325 26.7813 29.0659 25.9146L22.6514 19.5L29.066 13.0854C29.9326 12.2188 29.9326 10.8007 29.066 9.93411C28.1994 9.0675 26.7813 9.0675 25.9146 9.93411L19.5 16.3486L13.0854 9.93403C12.2188 9.06742 10.8007 9.06742 9.93411 9.93403C9.0675 10.8006 9.0675 12.2187 9.93411 13.0853L16.3486 19.5L9.93403 25.9146C9.06742 26.7812 9.06742 28.1994 9.93403 29.066ZM19.5 0C30.2695 0 39 8.73047 39 19.5C39 30.2695 30.2695 39 19.5 39C8.73047 39 0 30.2695 0 19.5C0 8.73047 8.73047 0 19.5 0Z" fill="#DC7139" />
          </svg></button>
        </div>
</div>
      


        <div className="Createpopup-main">
          <div className="Createpopup-heading">
            <h2>Create Schedule</h2>
          </div>

          <div className="Createpopup-box">
          <div  >
       

      <div style={{ textAlign: 'center' }}>
        <p>Name: {get_single_job_details_data?.UserDetails?.Name}</p>
        <p>Home Address: {get_single_job_details_data?.JobDetails?.location}</p>
        <p>Problem Details:</p>
        <p>{get_single_job_details_data?.JobDetails?.details}</p>
      </div>

      {
          !get_single_job_details_data?.JobDetails?.emergency &&

      <div style={{ textAlign: 'center' }}>
        <p className="Confirm-box-sping">Confirm Availability:</p>
        {(get_single_job_details_data?.JobDetails?.selected_queries === 'Cleaning' || get_single_job_details_data?.JobDetails?.selected_queries === 'Landscaping') ? (
          <div className="box-spassing-main">



         
            <button onClick={() => handleTimePress(1, get_single_job_details_data?.JobDetails?.amount.split('T')[0], get_single_job_details_data?.JobDetails?.amount.split('T')[1])}>
              <div className="hero-btn-box-bhai"  style={{ display: 'flex', alignItems: 'center', gap: '10px' ,flexDirection:'column'}} >
                <p style={{ color: selectedTimeIndex === 1 ? '#d46c35' : '#fff' }}>
                  {DateFormatCustom(get_single_job_details_data?.JobDetails?.amount.split('T')[0])}
                </p>
                <p style={{ color: selectedTimeIndex === 1 ? '#d46c35' : '#fff' }}>
                  {formatTime(get_single_job_details_data?.JobDetails?.amount.split('T')[1])}
                </p>
              </div>
            </button>
            </div>
        ) : (
          <>
            <div style={{display:'flex',flexDirection:'column'}} className="box-spassing-main">
              {get_single_job_details_data?.JobDetails?.availablity_times.map((e, i) => (
                <button key={i} onClick={() => handleTimePress(i, e?.date, e?.times[0])}>
                  <p style={{ color: selectedTimeIndex === i ? '#F37B3C' : '#fff' }}>
                    {DateFormatCustom(e?.date)} {formatTime(e?.times[0])}
                  </p>
                </button>
              ))}
            </div>
          </>
        )}
      </div>


      }

      {

            get_single_job_details_data?.JobDetails?.emergency &&
            <div style={{ textAlign: 'center' }}>
              <p>
               Emergency:  {
                    get_single_job_details_data?.JobDetails?.note
                }

              </p>
              <DateTimePicker dateTime={handleDateTimeEmergencyCallBack}/>
              </div>
      }







      {(get_single_job_details_data?.JobDetails?.selected_queries === 'Cleaning' || get_single_job_details_data?.JobDetails?.selected_queries === 'Landscaping') ? (
        <div className="Createpopup-btn">
          <button   onClick={handleCleaningLandscaping}>
            Submit
          </button>
        </div>
      ) : (
        <div className="Createpopup-btn">
          <button  onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
          </div>

          {/* <div className="Createpopup-btn">
            <button>
              Submit
            </button>
          </div> */}

        </div>
      </div>
    </>
  );
};

export default Createpopup;
