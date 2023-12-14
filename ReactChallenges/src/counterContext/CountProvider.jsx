import React, { useContext, useState } from 'react';
import CountContext from './index.js';

const CountProvider = ({children}) => {

const [count,setCount] =useState(1)
  const handleInc=()=>{
   return setCount(count+1);
  }
  const handleDec=()=>{
    return setCount(count-1)
  }

  return (
    <CountContext.Provider 
    value={{count,handleInc,handleDec}}>
        {children}
    </CountContext.Provider>
  )
}


export const useCounter =()=>{
  return useContext(CountContext);
}

export default CountProvider