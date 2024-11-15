import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../../BaseUrl";
import axios from "axios";
import { retry } from "@reduxjs/toolkit/query";

export const getTours = createAsyncThunk(
    "getTours",

    async(id,{rejectWithValue})=>{

        
        try {
            const response = await axios.get(`${baseurl}/getalltours`);
                const result= response.data

          
                return result


        } catch (error) {
            
            return rejectWithValue(error)
        }
    }


)



export const getSingleTour= createAsyncThunk(
    "getSingleTour",

    async(id,{rejectWithValue})=>{

        try {
            
            const response= await axios.get(`${baseurl}/getsingletour/${id}`)

            const result= response.data

            return result

        } catch (error) {
            
            rejectWithValue(error)
        }

    }

)




export const toursSlice= createSlice({

    name:'tours',
    initialState:{

        AllTours:[],
        loading:false,
        error:null,
        SingleTour:null

    },
    extraReducers:(builder)=>{

        builder
        .addCase(getTours.pending,(state)=>{

            state.loading=true
            state.error=null

        })
        .addCase(getTours.fulfilled,(state,action)=>{

            state.loading=false;
            state.AllTours=action.payload.Tours

            console.log(action.payload.Tours,"redux")

        })
        .addCase(getTours.rejected,(state,action)=>{

            state.loading=false;
            state.error=action.payload


        })


        .addCase(getSingleTour.pending,(state)=>{

            state.loading=true
            state.error=null

        })

        .addCase(getSingleTour.fulfilled,(state,action)=>{
            state.loading=false
            state.SingleTour = action.payload.TourDetails

        })

        .addCase(getSingleTour.rejected,(state,action)=>{

            state.error= action.payload.message

        })


    }



}) 

export default toursSlice.reducer;