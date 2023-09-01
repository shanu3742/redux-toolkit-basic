import {  createSlice, configureStore} from "@reduxjs/toolkit";
export const counterSlice= createSlice({
    name:'counter-slice',
    initialState:{
        count:0
    },
    reducers:{
        incrementsCounter:(state) => {
            state.count= state.count+1

        },
        decrementCounter: (state) => {
          state.count= state.count-1
        }
    }

})
export const {incrementsCounter,decrementCounter} = counterSlice.actions;
