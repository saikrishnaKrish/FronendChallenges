import { useContext, useState } from 'react'
import CounterContext from './counterContext.js'



// eslint-disable-next-line react/prop-types
const CounterContextProvider = ({children}) => {
    const [count,setCount]=useState(0)

    const incrementCount=()=>{
        setCount((c)=>c+1)
    }   
    const decrementCount=()=>{
        setCount((c)=>c-1)
    }


  return (
        <CounterContext.Provider value={{count,incrementCount,decrementCount}}>
            {children}
        </CounterContext.Provider>
  )
}

export const useCounter=()=>{
        return useContext(CounterContext);
    }

export default CounterContextProvider