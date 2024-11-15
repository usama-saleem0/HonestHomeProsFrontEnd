import { createAsyncThunk } from "@reduxjs/toolkit";
import { type_constants } from "../constants/constants";
import { apiHandle } from "../../BaseUrl";

export const create_vendor_async_service = createAsyncThunk(
  type_constants.CREATE_VENDOR,
  async (post_data) => {
    try {
      const response = await apiHandle.post("/create-vendor", post_data);
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);
export const login_vendor_async_service = createAsyncThunk(
  type_constants.LOGIN_VENDOR,
  async (post_data) => {
    try {
      const response = await apiHandle.post("/login-vendor", post_data);
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const get_vendor_profile_by_id_async_service = createAsyncThunk(
  type_constants.GET_VENDOR_PROFILE,
  async (post_data) => {
    // console.log("post_data", post_data);
    try {
      const response = await apiHandle.get(`/get-vendor-profile/${post_data}`);
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);
// update vendor profile thunk
export const update_vendor_profile_by_id_async_service = createAsyncThunk(
  type_constants.UPDATE_VENDOR_PROFILE,
  async ({ id, updatedData }) => {
    // Receive `id` and `updatedData` as parameters
    try {
      const response = await apiHandle.patch(
        `/updateuserdetails/${id}`,
        updatedData
      );
      return response.data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);
// export const get_matching_customer_async_service = createAsyncThunk(
//     type_constants.GET_MATCHING_CUSTOMER,
//     async (post_data) => {

//         console.log("hererererer")
//         const storedUserId = localStorage.getItem('userId');
//         const jsonString = localStorage.getItem('selectedQueries');
//         // const jsonZipCode = localStorage.getItem('userdetails');
//         // const user_details = localStorage.getItem('userdetail');

// // console.log(user_details , "hdjashfjfajlsf")

//         const retrievedArray = JSON.parse(jsonString);
//         try {
//             const response = await apiHandle.post(
//                 "/get-matching-jobs",
//                 {
//                     //  ZipCode:jsonZipCode,
//                     vendorId: storedUserId,
//                     query: retrievedArray

//                 }
//             );
//             const res_data = await response.data;
//             return res_data;
//         } catch (error) {
//             console.log(error);
//             if (error?.response?.data) {
//                 throw Error(error.response.data.message);
//             } else {
//                 throw Error(error.message);
//             }
//         }
//     }
// );

export const get_matching_customer_async_service = createAsyncThunk(
  type_constants.GET_MATCHING_CUSTOMER,
  async (post_data) => {
    try {
      // Log the data being passed to the function
      console.log("API called with post_data:", post_data);

      // Use the passed post_data object directly in the request body
      const response = await apiHandle.post("/get-matching-jobs", {
        vendorId: post_data.vendorId, // vendorId comes from post_data
        query: post_data.query, // query comes from post_data
      });

      // Extract and return the data from the response
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      // Handle any error responses
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const create_customer_gig_async_service = createAsyncThunk(
  type_constants.CREATE_GIG,
  async (post_data) => {
    try {
      const response = await apiHandle.post("/create-vendor-gig", post_data);
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);
export const get_customer_gig_async_service = createAsyncThunk(
  type_constants.GET_GIG,
  async (post_data) => {
    // console.log('post_datapost_datapost_data', post_data);
    try {
      const response = await apiHandle.post("/get-gig-by-id", post_data);
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const create_expert_gig_async_service1 = createAsyncThunk(
  type_constants.CREATE_GIG,
  async (post_data) => {
    try {
      const response = await apiHandle.post("/create-expert-gig", post_data);
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);
export const get_expert_gig_async_service1 = createAsyncThunk(
  type_constants.GET_GIG,
  async (post_data) => {
    // console.log('post_datapost_datapost_data', post_data);
    try {
      const response = await apiHandle.post("/get-expert-gig-by-id", post_data);
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const get_recent_customer_chats_async_service = createAsyncThunk(
  type_constants.GET_RECENT_CUSTOMER_CHAT,
  async () => {
    const storedUserId = localStorage.getItem("userId");

    try {
      const response = await apiHandle.post("/get-customers-recent-chat", {
        current_vendor_id: storedUserId,
      });
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const create_schedule_async_service = createAsyncThunk(
  type_constants.CREATE_SCHEDULE,
  async (post_data) => {
    try {
      const response = await apiHandle.post("/create-schedule", post_data);
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error?.response?.data?.error,"SCH ERROR");
      if (error?.response?.data?.error) {
        throw Error(error?.response?.data?.error );
      } else {
        throw Error(error?.response?.data?.error);
      }
    }
  }
);

export const create_payment_async_service = createAsyncThunk(
  type_constants.CREATE_PAYMENT,
  async (post_data) => {
    try {
      const response = await apiHandle.post("/create-payment", post_data);
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error?.response?.data,"error payment");
      if (error?.response?.data) {
        throw Error(error.response.data);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const get_vendor_schedule_async_service = createAsyncThunk(
  type_constants.GET_VENDOR_SCHEDULE,
  async () => {
    const storedUserId = localStorage.getItem("userId");

    try {
      const response = await apiHandle.post("/vendor-schedules", {
        vendorId: storedUserId,
      });
      const res_data = await response.data;
      // console.log("res_data",res_data);
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const get_single_job_details = createAsyncThunk(
  "get_single_job_details",
  async (post_data) => {
    console.log("post_data", post_data);
    try {
      const response = await apiHandle.get(`/getsinglejobbyid/${post_data}`);
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const get_reviews_by_id = createAsyncThunk(
  "get_reviews_by_id",
  async (post_data) => {
    console.log("post_data", post_data);
    try {
      const response = await apiHandle.get(`/getreviewsbyid/${post_data}`);
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const post_insurance_data = createAsyncThunk(
  "post_insurance_data",
  async (post_data) => {
    try {
      // Log the data being passed to the function
      console.log("API called with post_data:", post_data);

      // Use the passed post_data object directly in the request body
      const response = await apiHandle.post("/post-insurance", post_data);

      // Extract and return the data from the response
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      // Handle any error responses
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const delete_vendor_gig = createAsyncThunk(
  "delete_vendor_gig",
  async (post_data) => {
    try {
      const response = await apiHandle.post("/delete-vendor-gig", post_data);
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);




 






export const getsavedjobs = createAsyncThunk(
  "getsavedjobs",
  async (post_data) => {
    console.log("post_data", post_data);
    try {
      const response = await apiHandle.get(`/getvendorsavedjobs/${post_data}`);
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);




export const reset_password_request_otp_asyncv = createAsyncThunk(
  type_constants.FORGOT_PASSWORD,
  async (post_data) => {
    try {
      const response = await apiHandle.post(
        "/reset-password-reqv",
        post_data
      );
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);


export const reset_password_verify_otp_asyncv = createAsyncThunk(
  type_constants.VERIFY_OTP_RESET,
  async (post_data) => {
    const response = await apiHandle.post("/reset-password-otp-verifyv", post_data);
    
    
    const res_data = response.data;
    console.log("Response data:", res_data);
    console.log("Full response from the server:",res_data.success)
   
    if(res_data.success==true){

     
    }
    

    return res_data;
  }
);



export const reset_password_create_password_asyncv = createAsyncThunk(
  type_constants.RESET_PASSWORD,
  async (post_data) => {
    try {
      const response = await apiHandle.post(
        "/reset-password-createv",
        post_data
      );
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);
