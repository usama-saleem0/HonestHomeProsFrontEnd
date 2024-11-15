import { configureStore } from "@reduxjs/toolkit";
 import userDetailReducer from "./Features/UserDetailSlice";
 import toursReducer from "./Features/ToursSlice"
 import vendorSlice from "./Features/vendorSlice";

export const store = configureStore({
  reducer: {  
    userDetail: userDetailReducer,
    tours: toursReducer,
    vendorAuth: vendorSlice,
  },
});
