import { useCounter } from "./Context/CounterContextProvider"

const Incement = () => {
  const {incrementCount} =useCounter()

  return (
    <div>
        <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default Incement