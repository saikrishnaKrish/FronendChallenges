import React from 'react'
;import useCounter from './../counterContext'


const Home = () => {
  // const {count,handleInc,handleDec} = useContext(CountContext);
const {count,handleDec,handleInc} =useCounter()

  return (
    <div>
      Home &nbsp;  {count}
    <br/>
    <button onClick={(e)=>handleInc(e)}>Increment(+)</button>
    <br/>
    <button onClick={(e)=>handleDec(e)}>Decrement(-)</button>

    </div>
  )
}

export default Home