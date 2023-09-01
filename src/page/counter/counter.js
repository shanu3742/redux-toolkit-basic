import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementsCounter } from './counter.slice';
import './counter.css'

const Counter = () => {
    const count = useSelector((state) =>  state.counter.count);
    const dispatch= useDispatch()

    // console.log(appStore)
    console.log(count)
  return (
   <div  className='counter-container'>
    <p>simple counter</p>
     <div>
        <button onClick={() => dispatch(incrementsCounter())}>+</button>
        <p>{count}</p>
        <button onClick={() => dispatch(decrementCounter())}>-</button>
    </div>
   </div>
  )
}

export default Counter