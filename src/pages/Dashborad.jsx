import React, { useEffect, useState } from "react";
import Drop1 from "../components/Drop-down/Drop1";
import logo from "../assets/Images/dashlogo.png";
import Dashbordsidebar from "../components/Dashbord_components/Dashbordsidebar";
import TotalJob from "../assets/Images/TotalJob.png";
import ScheduleProjects from "../components/Dashbord_components/ScheduleProjects";
import Profile from "../components/Dashbord_components/Profile";
import Reviews from "../components/Dashbord_components/Reviews";
import { useDispatch, useSelector } from "react-redux";
import { get_customer_gig_async_service, get_matching_customer_async_service, get_reviews_by_id, get_vendor_profile_by_id_async_service, get_vendor_schedule_async_service, getsavedjobs } from "../Redux/Features/vendorService";

const Dashborad = () => {

       const dispatch = useDispatch() 

    const userid= localStorage.getItem('userId')
    const SelectedQuery= localStorage.getItem('selectedQueries')

    console.log(userid,SelectedQuery)





    useEffect(()=>{
            dispatch(get_vendor_profile_by_id_async_service(userid))
            getVendorSchedules()
            getVendorGigByID()
            getVendorMatchingJobs()
            dispatch(get_reviews_by_id(userid))

            dispatch(getsavedjobs(userid))
             
        
    },[])


    const getVendorSchedules=()=>{

        const formData={
            vendorId:userid
        }
        dispatch(get_vendor_schedule_async_service(formData))

    }


    
   const getVendorGigByID=()=>{

        const formData={
            vender_id:userid
        }
        dispatch(get_customer_gig_async_service(formData))

    }


    const getVendorMatchingJobs=()=>{

        const formData={
            vendorId:userid,
            query:[SelectedQuery]
        }
        dispatch(get_matching_customer_async_service(formData))

    }

    
  const  { vendor_profile_data,get_matching_customer_data,getsavedjobs_data
  } = useSelector((state)=>state.vendorAuth)

 


    return (
        <>
            <div className="Vendor-sec">
                <div className="Vendor-main">
                    <div className="Vendor-main-box">

                        <div className="Hello-Albert-box">
                            <div className="Hello-Albert-logo">
                                <img src={logo} alt="" />

                                <span>
                                    <h2>Hello {vendor_profile_data?.Name}</h2>
                                    <p>Here you can manage your household problems</p>
                                </span>
                            </div>

                            <div className="Hello-Alber-btn-box">
                                <Drop1 />
                            </div>
                        </div>

                        <div className="Hello-Total-Jobs-box">
                            <div className="Hello-Total-s-card">
                                <span>
                                    <div className="Total-Job-icon">
                                        <img src={TotalJob} alt="" />
                                    </div>
                                    <h4>Total </h4>
                                </span>
                                <h2>{get_matching_customer_data && get_matching_customer_data[0]?.jobs?.length}</h2>
                            </div>

                            <div className="Hello-Total-s-card">
                                <span>
                                    <div className="Total-Job-icon">
                                        <img src={TotalJob} alt="" />
                                    </div>
                                    <h4>Completed</h4>
                                </span>
                                <h2>0</h2>
                            </div>


                            <div className="Hello-Total-s-card">
                                <span>
                                    <div className="Total-Job-icon">
                                        <img src={TotalJob} alt="" />
                                    </div>
                                    <h4>Archived </h4>
                                </span>
                                <h2>{getsavedjobs_data&&getsavedjobs_data.length}</h2>
                            </div>
                        </div>

                        <div className="Hello-Schedule-Projects-box">
                            <ScheduleProjects />
                        </div>

                        <div className="Hello-Profile-box">
                            <Profile/>
                        </div>

                        <div className="Hello-Reviews-box">
                            <Reviews/>
                        </div>


                    </div>







                    <div className="Vendor-side-box">
                        <Dashbordsidebar />
                    </div>


                </div>
            </div>
        </>
    )



}


export default Dashborad