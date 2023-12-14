import { useCounter } from "./Context/CounterContextProvider"


const Decrement = () => {
  const { decrementCount} =useCounter()

  return (
    <div>
        <button onClick={decrementCount}>Decrement</button>
    </div>
  )
}

export default Decrement