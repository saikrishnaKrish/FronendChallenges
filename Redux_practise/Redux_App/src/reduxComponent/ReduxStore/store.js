import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../CounterWithRedux/counterSlice'
import productReducer from '../ProductListWithRedux/productSlice'

export const store=configureStore({
    reducer:{
        counter:counterReducer,
        products:productReducer
    }
})