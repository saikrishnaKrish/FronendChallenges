import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:5
    },
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        incrmentByValue:(state,action)=>{
            state.count=state.count+action.payload
        }
    }
})

export const {increment,decrement,incrmentByValue} = counterSlice.actions;

export default counterSlice.reducer;