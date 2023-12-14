import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "./productsList";


const produtsSlice=createSlice({
    name:'products List',
    initialState:productsList,
    reducers:{
        addProduct:(state,action)=>{
            state.push(action.payload)
        },
        removeProduct:(state,action)=>{
            const productIdToRemove=action.payload;
            return state.filter(product=>product.id!=productIdToRemove)
        }
    }
})

export default produtsSlice.reducer;
export const {addProduct,removeProduct}=produtsSlice.actions;