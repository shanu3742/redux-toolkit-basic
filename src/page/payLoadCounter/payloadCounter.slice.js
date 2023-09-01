import { createSlice } from "@reduxjs/toolkit";

export const  payloadCounterSlice = createSlice({
    name:'payload counter',
    initialState:{
        count:0,
        payloadWeight:0
    },
   reducers:{
    incrementpayloadCounter:(state,action) => {
        console.log(action)
        state.count= state.count+ (+action.payload)
    },
    decrementPayLoadCounter:(state,action) => {
        state.count= state.count- (+action.payload)
    },
    onInputUpdate:(state,action) => {
        state.payloadWeight= action.payload.target.value
    }
   }

})
export const {incrementpayloadCounter,decrementPayLoadCounter,onInputUpdate} = payloadCounterSlice.actions