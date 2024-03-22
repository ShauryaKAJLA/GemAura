import { createSlice } from "@reduxjs/toolkit";
import {products} from '../data/products'
const initialState={
    products:products.filter(item=>item)
};

export const FilteredProductsSlice=createSlice({
    name:"FilteredProducts",
    initialState,
    reducers:{
        changeProducts:(state,action)=>{
            let pro=products.filter(item=>item)
            console.log(action.payload)
              if(action.payload.gender!='All')
              {
                pro=pro.filter(i=>i.gender==action.payload.gender)
              }
              if(action.payload.Gem!='All')
              {
                pro=pro.filter(i=>i.Gem.type==action.payload.Gem)
              }
              if(action.payload.Metal!='All')
              {
                pro=pro.filter(i=>i.metal.type==action.payload.Metal)
              }
            pro=pro.filter(item=>item.metal.pricePerGram*item.metal.weightInGram+item.Gem.totalPrice<=action.payload.price)
          state.products=pro
        }
    }
})
export const {changeProducts}=FilteredProductsSlice.actions;











export default FilteredProductsSlice.reducer;