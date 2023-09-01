import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { counterSlice } from "../page/counter/counter.slice";
import { payloadCounterSlice } from "../page/payLoadCounter/payloadCounter.slice";


const rootReducer = combineReducers({
     counter: counterSlice.reducer,
     payloadCounter:payloadCounterSlice.reducer
    //   counterWidthPayload: todoReducer,
  });

export const store= configureStore({
    reducer:rootReducer
})