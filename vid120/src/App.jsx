import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply, incrementByAmount } from '../redux/counter/counterSlice.js'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(6))}>+*</button>
      currently count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())}>*</button>

    </div>
   
    </>
  )
}

export default App
