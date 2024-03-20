import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";
// import { products } from "../../data/products";

const initialState={
    cart:[]
}
export const CartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
              if(state.cart.find(item=>item.id==action.payload.id))
              {
                  state.cart=state.cart.filter(item=>item.id==action.payload.id?[item,item.quantity+=1]:item)
            }
            else
            {
                    let newitem= {
                        id:action.payload.id,
                        name:action.payload.name,
                        desc:action.payload.desc,
                        metal:action.payload.metal,
                        Gem:action.payload.Gem,
                         type:action.payload.type,
                         images:action.payload.images,
                         quantity:1
                    }
                     state.cart.push(newitem);
              }
          },
        addQuantity : (state,action)=>{
            state.cart=state.cart.filter(item=>item.id==action.payload?[item,item.quantity+=1]:item)
        },
        reduceQuantity : (state,action)=>{
            state.cart=state.cart.filter(item=>item.id==action.payload?[item,item.quantity-=1]:item)
            state.cart=state.cart.filter(item=>item.quantity>0)
        },
        removeItem : (state,action)=>{
            state.cart=state.cart.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToCart,addQuantity,reduceQuantity,removeItem} = CartSlice.actions
export default CartSlice.reducer