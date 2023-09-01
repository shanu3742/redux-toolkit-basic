import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementPayLoadCounter, incrementpayloadCounter, onInputUpdate } from './payloadCounter.slice';

const PayLoadCounter = () => {


    const appStore = useSelector((d) => d.payloadCounter);
    const dispatch = useDispatch();
    console.log(appStore.payloadWeight)

// payloadWeight
  return (

    <div  className='counter-container'>
    <p>payLoad counter</p>
    <input placeholder='payload' value={appStore.payloadWeight}  onChange={(e) => dispatch(onInputUpdate(e))}/>
     <div>
        <button onClick={() => dispatch(incrementpayloadCounter(+appStore.payloadWeight))}>+</button>
        <p>{appStore.count}</p>
        <button onClick={() => dispatch(decrementPayLoadCounter(+appStore.payloadWeight))}>-</button>
    </div>
   </div>
  )
}

export default PayLoadCounter