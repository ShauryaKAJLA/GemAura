import { useDispatch, useSelector } from "react-redux";
import { addQuantity, reduceQuantity, removeItem } from './CartSlice';
import { Link } from "react-router-dom";
export function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart.cart);
    var price=0;
        cart.forEach(item=>{
            price+=(item.Gem.totalPrice+item.metal.weightInGram*item.metal.pricePerGram)*item.quantity;
        })
        const getImg=(item)=>{
            let fin;
            item.images.forEach(i=>{
                if(i.main)
                {
                    fin=i.src;
                }
            })
            return fin;
        }
    return (
        <div className="h-[100vh] overflow-y-scroll overflow-x-hidden ">
            <div className=" lg:h-[15vh] md:h-[9vh] border w-[98vw] h-[10vh] text-2xl flex justify-center items-center">Your cart items</div>
            <div className="lg:h-[6vh] md:h-[6vh] border w-[98vw] h-[8vh]  flex justify-center items-center text-custom underline font-semibold text-sm"><Link to='/' >Back to Home</Link></div>
                   { cart.length  ? 
            <div className="w-[98vw]  border ">
                {cart.map(item=><div key={item.id} className="flex justify-between">
                    <div className="flex">
                    <div>
                        <img src={getImg(item)} className="w-[60px] " />
                    </div>
                                <div className="flex flex-col">
                                    <div>
                                    {item.name}

                                    </div>
                                    <div>
                                    <button onClick={() => dispatch(removeItem(item.id))}>Remove from cart</button>
                                    </div>
                                </div>
                                </div>
                                <div className="flex flex-col">
                                <div className="flex">
                                   <div>Price </div> <div> {(item.Gem.totalPrice+item.metal.pricePerGram*item.metal.weightInGram)}</div>
                                </div>
                                <div className="flex">
                                    <div>
                                        Quantity
                                    </div>
                                    <div>
                                    <button onClick={() => dispatch(reduceQuantity(item.id))}>-</button>
                                    {item.quantity}
                                    <button onClick={() => dispatch(addQuantity(item.id))}>+</button>
                                    </div>

                                </div>
                                <div className="flex">
                                    <div>Total: </div>
                                    <div>{(item.Gem.totalPrice+item.metal.pricePerGram*item.metal.weightInGram)*item.quantity}</div>
                                </div>
                                </div>
                            </div>
               )
            }

            {/*  price component */}
            {
                cart.length !== 0 &&
                <div>
                    Sub-Total  Rs-{price}
                </div>
                }
            </div>:<div>Your Cart is empty</div> }
        </div>
    );
}
