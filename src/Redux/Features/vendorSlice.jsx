import { createSlice } from "@reduxjs/toolkit";
import { asyncStatus } from "../utils/async_status";
import {
  create_customer_gig_async_service,
  create_schedule_async_service,
  create_payment_async_service,
  create_vendor_async_service,
  get_customer_gig_async_service,
  get_matching_customer_async_service,
  get_recent_customer_chats_async_service,
  get_vendor_profile_by_id_async_service,
  get_vendor_schedule_async_service,
  login_vendor_async_service,
  get_single_job_details,
  get_reviews_by_id,
  post_insurance_data,
  delete_vendor_gig,
  update_vendor_profile_by_id_async_service,
  getsavedjobs,
  reset_password_request_otp_asyncv,
  reset_password_verify_otp_asyncv,
  reset_password_create_password_asyncv,
} from "./vendorService";

import { toast } from "react-toastify";

const initialState = {
  vendor_status: asyncStatus.IDLE,
  vendor_data: null,
  vendor_error: null,

  vendor_login_status: asyncStatus.IDLE,
  vendor_login_data: null,
  vendor_login_error: null,

  vendor_profile_status: asyncStatus.IDLE,
  vendor_profile_data: null,
  vendor_profile_error: null,

  get_matching_customer_status: asyncStatus.IDLE,
  get_matching_customer_data: null,
  get_matching_customer_error: null,

  create_customer_gig_status: asyncStatus.IDLE,
  create_customer_gig_data: null,
  create_customer_gig_error: null,

  get_customer_gig_status: asyncStatus.IDLE,
  get_customer_gig_data: null,
  get_customer_gig_error: null,

  get_customers_recent_chat_status: asyncStatus.IDLE,
  get_customers_recent_chat_data: null,
  get_customers_recent_chat_error: null,

  create_schedule_status: asyncStatus.IDLE,
  create_schedule_data: null,
  create_schedule_error: null,

  get_schedule_status: asyncStatus.IDLE,
  get_schedule_data: null,
  get_schedule_error: null,

  get_single_job_details_status: asyncStatus.IDLE,
  get_single_job_details_data: null,
  get_single_job_details_error: null,

  get_reviews_by_id_status: asyncStatus.IDLE,
  get_reviews_by_id_data: null,
  get_reviews_by_id_error: null,

  post_insurance_data_status: asyncStatus.IDLE,
  post_insurance_data_data: null,
  post_insurance_data_error: null,

  delete_vendor_gig_status: asyncStatus.IDLE,
  delete_vendor_gig_data: null,
  delete_vendor_gig_error: null,





  getsavedjobs_status: asyncStatus.IDLE,
  getsavedjobs_data: null,
  getsavedjobs_error: null,
  





  reset_otp_status: asyncStatus.IDLE,
  reset_otp_data: null,
  reset_otp_error: null,




  otp_status: asyncStatus.IDLE,
  otp_data: null,
  otp_error: null,




  reset_password_status: asyncStatus.IDLE,
  reset_password_data: null,
  reset_password_error: null,


};

const vendorSlice = createSlice({
  name: "vendor",
  initialState: initialState,
  reducers: {
    setVendorIdle(state, { payload }) {
      state.vendor_status = asyncStatus.IDLE;
    },
    setVendorLoginIdle(state, { payload }) {
      state.vendor_login_status = asyncStatus.IDLE;
    },
    setVendorGigIdle(state, { payload }) {
      state.create_customer_gig_status = asyncStatus.IDLE;
    },
    setCreateSeheduleIdle(state, { payload }) {
      state.create_schedule_status = asyncStatus.IDLE;
    },

    setCreatePayment(state, { payload }) {
      state.create_payment_status = asyncStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      create_vendor_async_service.pending,
      (state, { payload }) => {
        state.vendor_status = asyncStatus.LOADING;
        state.vendor_data = null;
        state.vendor_error = null;
      }
    );

    builder.addCase(
      create_vendor_async_service.fulfilled,
      (state, { payload }) => {
        state.vendor_status = asyncStatus.SUCCEEDED;
        state.vendor_data = payload.data;
        localStorage.setItem("userId", payload?.data?._id);
        localStorage.setItem(
          "selectedQueries",
          payload?.data?.selected_queries[0]
        );
        state.vendor_error = null;
        toast.success("Registered Successfully", {
          position: "top-center",
        });
      }
    );
    builder.addCase(create_vendor_async_service.rejected, (state, actions) => {
      state.vendor_status = asyncStatus.ERROR;
      state.vendor_data = null;
      state.vendor_error = actions.error.message;
      toast.error(actions.error.message, {
        position: "top-center",
      });
    });
    //  ==================>>>>>> Login Case Start
    builder.addCase(
      login_vendor_async_service.pending,
      (state, { payload }) => {
        state.vendor_login_status = asyncStatus.LOADING;
        state.vendor_login_data = null;
        state.vendor_login_error = null;
      }
    );

    builder.addCase(
      login_vendor_async_service.fulfilled,
      (state, { payload }) => {
        state.vendor_login_status = asyncStatus.SUCCEEDED;
        state.vendor_login_data = payload.data;
        console.log("payload.data", payload.data);
        localStorage.setItem("userId", payload?.data?.user_id);
        localStorage.setItem(
          "selectedQueries",
          payload?.data?.selected_queries[0]
        );
        localStorage.setItem("Profile_Image", payload?.data?.Profile_Image);
        state.vendor_login_error = null;
        toast.success("Login Successfully", {
          position: "top-center",
        });
      }
    );
    builder.addCase(login_vendor_async_service.rejected, (state, actions) => {
      state.vendor_login_status = asyncStatus.ERROR;
      state.vendor_login_data = null;
      state.vendor_login_error = actions.error.message;
      toast.error(actions.error.message, {
        position: "top-center",
      });
    });

    //  ==================>>>>>> Get Vendor Profile Case Start
    builder.addCase(
      get_vendor_profile_by_id_async_service.pending,
      (state, { payload }) => {
        state.vendor_profile_status = asyncStatus.LOADING;
        state.vendor_profile_data = null;
        state.vendor_profile_error = null;
      }
    );

    builder.addCase(
      get_vendor_profile_by_id_async_service.fulfilled,
      (state, { payload }) => {
        state.vendor_profile_status = asyncStatus.SUCCEEDED;
        state.vendor_profile_data = payload.data;
        state.vendor_profile_error = null;
      }
    );
    builder.addCase(
      get_vendor_profile_by_id_async_service.rejected,
      (state, actions) => {
        state.vendor_profile_status = asyncStatus.ERROR;
        state.vendor_profile_data = null;
        state.vendor_profile_error = actions.error.message;
      }
    );

    //  ==================>>>>>> Update Vendor Profile Case Start

    builder.addCase(
      update_vendor_profile_by_id_async_service.pending,
      (state) => {
        state.vendor_profile_update_status = asyncStatus.LOADING;
        state.vendor_profile_update_error = null;
      }
    );

    builder.addCase(
      update_vendor_profile_by_id_async_service.fulfilled,
      (state, { payload }) => {
        state.vendor_profile_update_status = asyncStatus.SUCCEEDED;
        state.vendor_profile_data = payload; // Update state with updated profile data
        state.vendor_profile_update_error = null;
      }
    );

    builder.addCase(
      update_vendor_profile_by_id_async_service.rejected,
      (state, actions) => {
        state.vendor_profile_update_status = asyncStatus.ERROR;
        state.vendor_profile_update_error = actions.error.message;
      }
    );

    //  ==================>>>>>> Get All Matchig Customer  Case Start
    builder.addCase(
      get_matching_customer_async_service.pending,
      (state, { payload }) => {
        state.get_matching_customer_status = asyncStatus.LOADING;
        state.get_matching_customer_data = null;
        state.get_matching_customer_error = null;
      }
    );

    builder.addCase(
      get_matching_customer_async_service.fulfilled,
      (state, { payload }) => {
        state.get_matching_customer_status = asyncStatus.SUCCEEDED;
        state.get_matching_customer_data = payload.data;
        state.get_matching_customer_error = null;
      }
    );
    builder.addCase(
      get_matching_customer_async_service.rejected,
      (state, actions) => {
        state.get_matching_customer_status = asyncStatus.ERROR;
        state.get_matching_customer_data = null;
        state.get_matching_customer_error = actions.error.message;
      }
    );

    //  ==================>>>>>> Create Customer Gig  Case Start
    builder.addCase(
      create_customer_gig_async_service.pending,
      (state, { payload }) => {
        state.create_customer_gig_status = asyncStatus.LOADING;
        state.create_customer_gig_data = null;
        state.create_customer_gig_error = null;
      }
    );

    builder.addCase(
      create_customer_gig_async_service.fulfilled,
      (state, { payload }) => {
        state.create_customer_gig_status = asyncStatus.SUCCEEDED;
        state.create_customer_gig_data = payload.data;
        state.create_customer_gig_error = null;
        toast.success("Create Successfully", {
          position: "top-center",
        });
      }
    );
    builder.addCase(
      create_customer_gig_async_service.rejected,
      (state, actions) => {
        state.create_customer_gig_status = asyncStatus.ERROR;
        state.create_customer_gig_data = null;
        state.create_customer_gig_error = actions.error.message;
      }
    );
    //  ==================>>>>>> Get Customer Gig  Case Start
    builder.addCase(
      get_customer_gig_async_service.pending,
      (state, { payload }) => {
        state.get_customer_gig_status = asyncStatus.LOADING;
        state.get_customer_gig_data = null;
        state.get_customer_gig_error = null;
      }
    );

    builder.addCase(
      get_customer_gig_async_service.fulfilled,
      (state, { payload }) => {
        state.get_customer_gig_status = asyncStatus.SUCCEEDED;
        state.get_customer_gig_data = payload.data;
        state.get_customer_gig_error = null;
      }
    );
    builder.addCase(
      get_customer_gig_async_service.rejected,
      (state, actions) => {
        state.get_customer_gig_status = asyncStatus.ERROR;
        state.get_customer_gig_data = null;
        state.get_customer_gig_error = actions.error.message;
      }
    );

    // =====================>>>> Get Customers Recent Chat Profile <<<<<<================= //

    builder.addCase(
      get_recent_customer_chats_async_service.pending,
      (state, { payload }) => {
        state.get_customers_recent_chat_status = asyncStatus.LOADING;
        state.get_customers_recent_chat_data = null;
        state.get_customers_recent_chat_error = null;
      }
    );

    builder.addCase(
      get_recent_customer_chats_async_service.fulfilled,
      (state, { payload }) => {
        state.get_customers_recent_chat_status = asyncStatus.SUCCEEDED;
        state.get_customers_recent_chat_data = payload.data;
        state.get_customers_recent_chat_error = null;
      }
    );
    builder.addCase(
      get_recent_customer_chats_async_service.rejected,
      (state, actions) => {
        state.get_customers_recent_chat_status = asyncStatus.ERROR;
        state.get_customers_recent_chat_data = null;
        state.get_customers_recent_chat_error = actions.error.message;
      }
    );

    // =====================>>>> Create Schedule ================= //

    builder.addCase(
      create_schedule_async_service.pending,
      (state, { payload }) => {
        state.create_schedule_status = asyncStatus.LOADING;
        state.create_schedule_data = null;
        state.create_schedule_error = null;
      }
    );

    builder.addCase(
      create_schedule_async_service.fulfilled,
      (state, { payload }) => {
        state.create_schedule_status = asyncStatus.SUCCEEDED;
        state.create_schedule_data = payload.data;
        state.create_schedule_error = null;
        toast.success("Create Successfully", {
          position: "top-center",
        });
      }
    );
    builder.addCase(
      create_schedule_async_service.rejected,
      (state, actions) => {
        state.create_schedule_status = asyncStatus.ERROR;
        state.create_schedule_data = null;
        state.create_schedule_error = actions.error.message;
        toast.error(actions.error.message, {
          position: "top-center",
        });
      }
    );

    builder.addCase(
      create_payment_async_service.pending,
      (state, { payload }) => {
        state.create_payment_status = asyncStatus.LOADING;
        state.create_payment_data = null;
        state.create_payment_error = null;
      }
    );

    builder.addCase(
      create_payment_async_service.fulfilled,
      (state, { payload }) => {
        state.create_payment_status = asyncStatus.SUCCEEDED;
        state.create_payment_data = payload.data;
        state.create_payment_error = null;
        toast.success("Create Successfully", {
          position: "top-center",
        });
      }
    );

    builder.addCase(create_payment_async_service.rejected, (state, actions) => {
      state.create_payment_status = asyncStatus.ERROR;
      state.create_payment_data = null;
      state.create_payment_error = actions.error.message;
      toast.error(actions.error.message, {
        position: "top-center",
      });
    });

    // =====================>>>> Create Schedule ================= //

    builder.addCase(
      get_vendor_schedule_async_service.pending,
      (state, { payload }) => {
        state.get_schedule_status = asyncStatus.LOADING;
        state.get_schedule_data = null;
        state.get_schedule_error = null;
      }
    );

    builder.addCase(
      get_vendor_schedule_async_service.fulfilled,
      (state, { payload }) => {
        state.get_schedule_status = asyncStatus.SUCCEEDED;
        state.get_schedule_data = payload;
        // console.log("payload", payload);
        state.get_schedule_error = null;
      }
    );
    builder.addCase(
      get_vendor_schedule_async_service.rejected,
      (state, actions) => {
        state.get_schedule_status = asyncStatus.ERROR;
        state.get_schedule_data = null;
        state.get_schedule_error = actions.error.message;
      }
    );

    // =====================>>>> get single job by id ================= //

    builder.addCase(get_single_job_details.pending, (state, { payload }) => {
      state.get_single_job_details_status = asyncStatus.LOADING;
      state.get_single_job_details_data = null;
      state.get_single_job_details_error = null;
    });

    builder.addCase(get_single_job_details.fulfilled, (state, { payload }) => {
      state.get_single_job_details_status = asyncStatus.SUCCEEDED;
      state.get_single_job_details_data = payload;
      // console.log("payload", payload);
      state.get_single_job_details_error = null;
    });
    builder.addCase(get_single_job_details.rejected, (state, actions) => {
      state.get_single_job_details_status = asyncStatus.ERROR;
      state.get_single_job_details_data = null;
      state.get_single_job_details_error = actions.error.message;
    });

    // =====================>>>> get reviews by id ================= //

    builder.addCase(get_reviews_by_id.pending, (state, { payload }) => {
      state.get_reviews_by_id_status = asyncStatus.LOADING;
      state.get_reviews_by_id_data = null;
      state.get_reviews_by_id_error = null;
    });

    builder.addCase(get_reviews_by_id.fulfilled, (state, { payload }) => {
      state.get_reviews_by_id_status = asyncStatus.SUCCEEDED;
      state.get_reviews_by_id_data = payload;
      // console.log("payload", payload);
      state.get_reviews_by_id_error = null;
    });
    builder.addCase(get_reviews_by_id.rejected, (state, actions) => {
      state.get_reviews_by_id_status = asyncStatus.ERROR;
      state.get_reviews_by_id_data = null;
      state.get_reviews_by_id_error = actions.error.message;
    });

    // =====================>>>> post insurance data ================= //

    builder.addCase(post_insurance_data.pending, (state, { payload }) => {
      state.post_insurance_data_status = asyncStatus.LOADING;
      state.post_insurance_data_data = null;
      state.post_insurance_data_error = null;
    });

    builder.addCase(post_insurance_data.fulfilled, (state, { payload }) => {
      state.post_insurance_data_status = asyncStatus.SUCCEEDED;
      state.post_insurance_data_data = payload;
      // console.log("payload", payload);
      state.post_insurance_data_error = null;
      toast.success("Data Posted Successfully");
    });
    builder.addCase(post_insurance_data.rejected, (state, actions) => {
      state.post_insurance_data_status = asyncStatus.ERROR;
      state.post_insurance_data_data = null;
      state.post_insurance_data_error = actions.error.message;

      toast.error(actions.error.message);
    });

    // =====================>>>> delete vendor gig ================= //

    builder.addCase(delete_vendor_gig.pending, (state, { payload }) => {
      state.delete_vendor_gig_status = asyncStatus.LOADING;
      state.delete_vendor_gig_data = null;
      state.delete_vendor_gig_error = null;
    });

    builder.addCase(delete_vendor_gig.fulfilled, (state, { payload }) => {
      state.delete_vendor_gig_status = asyncStatus.SUCCEEDED;
      state.delete_vendor_gig_data = payload;
      // console.log("payload", payload);
      state.delete_vendor_gig_error = null;
      toast.success("Profile Deleted Successfully");
    });
    builder.addCase(delete_vendor_gig.rejected, (state, actions) => {
      state.delete_vendor_gig_status = asyncStatus.ERROR;
      state.delete_vendor_gig_data = null;
      state.delete_vendor_gig_error = actions.error.message;

      toast.error(actions.error.message);
    });



    // Get Saved Jobs



    builder.addCase(getsavedjobs.pending, (state, { payload }) => {
      state.getsavedjobs_status = asyncStatus.LOADING;
      state.getsavedjobs_data = null;
      state.getsavedjobs_error = null;
    });

    builder.addCase(getsavedjobs.fulfilled, (state, { payload }) => {
      state.getsavedjobs_status = asyncStatus.SUCCEEDED;
      state.getsavedjobs_data = payload.jobs;
      // console.log("payload", payload);
      state.getsavedjobs_error = null;
     
    });
    builder.addCase(getsavedjobs.rejected, (state, actions) => {
      state.getsavedjobs_status = asyncStatus.ERROR;
      state.getsavedjobs_data = null;
      state.getsavedjobs_error = actions.error.message;
 
    });




    // reset password
    builder.addCase(reset_password_request_otp_asyncv.pending, (state, { payload }) => {
      state.reset_otp_status = asyncStatus.LOADING;
      state.reset_otp_data = null;
      state.reset_otp_error = null;
    });

    builder.addCase(reset_password_request_otp_asyncv.fulfilled, (state, { payload }) => {
      state.reset_otp_status = asyncStatus.SUCCEEDED;
      state.reset_otp_data = payload.jobs;
      // console.log("payload", payload);
      state.reset_otp_error = null;
     
    });
    builder.addCase(reset_password_request_otp_asyncv.rejected, (state, actions) => {
      state.reset_otp_status = asyncStatus.ERROR;
      state.reset_otp_data = null;
      state.reset_otp_error = actions.error.message;
 
    });


     //  otp 
     builder.addCase(reset_password_verify_otp_asyncv.pending, (state, { payload }) => {
      state.otp_status = asyncStatus.LOADING;
      state.otp_data = null;
      state.otp_error = null;
    });

    builder.addCase(reset_password_verify_otp_asyncv.fulfilled, (state, { payload }) => {
      state.otp_status = asyncStatus.SUCCEEDED;
      state.otp_data = payload.jobs;
      // console.log("payload", payload);
      state.otp_error = null;
     
    });
    builder.addCase(reset_password_verify_otp_asyncv.rejected, (state, actions) => {
      state.otp_status = asyncStatus.ERROR;
      state.otp_data = null;
      state.otp_error = actions.error.message;
 
    });



        //  reset password
        builder.addCase(reset_password_create_password_asyncv.pending, (state, { payload }) => {
          state.reset_password_status = asyncStatus.LOADING;
          state.reset_password_data = null;
          state.reset_password_error = null;
        });
    
        builder.addCase(reset_password_create_password_asyncv.fulfilled, (state, { payload }) => {
          state.reset_password_status = asyncStatus.SUCCEEDED;
          state.reset_password_data = payload.jobs;
          // console.log("payload", payload);
          state.reset_password_error = null;
         
        });
        builder.addCase(reset_password_create_password_asyncv.rejected, (state, actions) => {
          state.reset_password_status = asyncStatus.ERROR;
          state.reset_password_data = null;
          state.reset_password_error = actions.error.message;
     
        });







  },
});

export const {
  setVendorIdle,
  setVendorLoginIdle,
  setVendorGigIdle,
  setCreateSeheduleIdle,
  setCreatePayment,
} = vendorSlice.actions;

export default vendorSlice.reducer;
