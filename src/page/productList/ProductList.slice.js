import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState= {
    contents:[],
    isLoading:false,
    error:''
}
export const fetchContent = createAsyncThunk('content/fetchContent',async () => {
      const res = await axios('https://jsonplaceholder.typicode.com/photos')
      const data = await res.data
      return data
    }
  )
export const productSlice=createSlice({
    name:'product slice',
    initialState:initialState,
    extraReducers:(builder)=> {
        builder.addCase(fetchContent.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(fetchContent.fulfilled, (state, action) => {
            state.isLoading = false
            state.contents = action.payload
          })
          builder.addCase(fetchContent.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
          })
    }
})
// export {productSlice.reducers}