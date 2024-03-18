import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../pages/cart/CartSlice'

export const store= configureStore({
    reducer:{
        cart:CartReducer,
    }
}) 