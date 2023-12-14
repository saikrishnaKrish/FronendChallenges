
import { useCounter } from "./Context/CounterContextProvider.jsx"
import Decrement from "./Decrement.jsx"
import Incement from "./Incement.jsx"

const CounterWithContext =()=>{   
    const {count} =useCounter()


    return <>
        Counter Value : {count}
        <Incement/> <Decrement/>    
    </>
}

export default CounterWithContext