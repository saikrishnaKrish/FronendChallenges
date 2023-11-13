import { useRef, useState } from "react";
import './style.css';

const Counter=()=>{
    
    const [count,setCount] =useState(0);
    const inputRef=useRef();


    

function sumofNumbers(cVal){
    let sum=0
    if(cVal==0)
    return sum;
    return sum+cVal%10+sumofNumbers(parseInt(cVal/10))
}
    const handleCount=()=>{
        const value=parseInt(inputRef.current.value);
        if(!isNaN(value)){
            setCount(c=>c+value); 
        }

        inputRef.current.value='';           
    }

    const handleSum=()=>{
        let res=sumofNumbers(count)
        setCount(res)
    }



    return(<>
            <h1>Counter: {count} </h1>

            Enter The value:
            <input type="number" ref={inputRef} className="counterValue"/> 
            <button onClick={
                handleCount
            }
            className="primary-btn"
                > Add </button> 
                <button  className="primary-btn" 
                onClick={handleSum}>sum of Numbers </button>
            <div className="">
            <button className="btn primary-btn" onClick={(e)=>setCount(prevCount=>prevCount+5)} >Increment By 5</button>
            <button className="btn primary-btn" onClick={()=>setCount(prevCount=>prevCount+10)}>Increment By 10</button>
            </div>

    </>)
}

export default Counter;