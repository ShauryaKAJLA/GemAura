import { createSlice } from "@reduxjs/toolkit";
import { products } from '../../data/products'
const initialState={
    productInfo:[]
}

export const productListSlice=createSlice({
    name:"ProductInfo",
    initialState,
    reducers:{
        setProductInfo:(state,action)=>{
            let fin=products.find(item=>item.id==action.payload.id)
            state.productInfo=fin
        }
    }
})
export const {setProductInfo}=productListSlice.actions
export default productListSlice.reducer