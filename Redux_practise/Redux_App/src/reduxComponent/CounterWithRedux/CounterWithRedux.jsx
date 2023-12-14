import { increment,decrement,incrmentByValue } from "./counterSlice";
import {useSelector,useDispatch} from 'react-redux';

const CounterWithRedux = () => {
  const count=useSelector((store)=>store.counter.count)
  const dispatch=useDispatch();
  
  const handleInc=()=>{
      dispatch(increment())
  }

  const handleDec=()=>{
    dispatch(decrement());
  }

  const handleIncrementByValue=()=>{
    dispatch(incrmentByValue(5))
  }
  
  
  return (
    <div>
      <b>Counter Value - {count}</b>
        <br/>
        <button onClick={handleInc}>Increment </button>
        <button onClick={handleDec}> Decrement</button>
        <button onClick={handleIncrementByValue}>Increment By value</button>
      </div>
  )
}

export default CounterWithRedux;