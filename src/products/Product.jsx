
import { addToCart } from '../pages/cart/CartSlice'
import { useDispatch, useSelector} from "react-redux"
import { FaRegHeart } from "react-icons/fa";
import { toast } from 'react-toastify'
import Filter from './Filter';
import 'react-toastify/dist/ReactToastify.css';
import './Product.css'
export function Product()
{
    const products =useSelector(state=>state.FilteredProducts.products)
    const getImg=(item)=>{
        let findMain;
        item.images.forEach(i=>{
            if(i.main)
            {
                findMain=i.src;
            }
        })
        return findMain;
    }
    const dispatch=useDispatch()
    const handelOut=(item)=>{
     if(item.instock)
     dispatch(addToCart(item))
    else
     toast.error("item is not in stock")
    }
    return(
<div className='flex flex-col h-[100vh] overflow-hidden'>
    <div className='filter'>
        <Filter />
    
    </div>
    <div className='pros'><div className='my-4 text-2xl w-[100vw] flex justify-center  h-7 font-semibold '>All Products</div>
        <div className='flex h-[86vh] w-[100vw] flex-wrap overflow-y-scroll proCont '>
           
            {    
                products.length ? products.map(item=><div key={item.id} className=' m-2 gap-y-1 w-[200px] h-[310px] flex flex-col proDiv justify-center'>
                       <div className=' bg-black w-[200px] h-[250px] rounded-[15px] flex justify-center flex-wrap items-center proUp'>
                     
                        <img src={getImg(item)} className='  w-[200px] h-[200px]  rounded-[15px]  object-contain object-center proImg' />
                        <div className='text-white w-[200px] overflow-clip justify-center flex proName proNamePre'>
                            {item.name}
                        </div>
                       </div>
                       <div>
                        <div className='hidden proNameAft font-bold text-sm '>{item.name}</div>
                       <div className='flex justify-between w-[200px] h-[25px] proMiddle'>
                        <div className='font-semibold proPrice'>
                           Rs.{item.Gem.totalPrice+item.metal.pricePerGram*item.metal.weightInGram}
                        </div>
                        <div className='text-xs font-semibold proStock'>
                            <div className={item.instock?'text-green-800':'text-red-800'}>{item.instock?"In stock":"out of stock"}</div>
                        </div>
                        </div>
                        <div className='flex w-[200px] justify-between flex-wrap items-center proDown'>
 
                        <div className='text-white  bg-black w-[165px] h-[30px] rounded-[4px] flex justify-center text-sm proCart' onClick={()=>handelOut(item) } >
                            <button >+ Add To Cart</button>
                          
                        </div>
                        <div className=' custom-bg w-[30px] h-[30px] rounded-[4px] flex justify-center flex-wrap items-center proWish'>
                          <FaRegHeart />
                        </div>
                        </div>
                        </div>
                    </div>
                ): <div className=' text-4xl text-red-600 justify-center flex w-full'>"No Products Found"</div>
            }
         

        </div>
        </div>
        </div>
    )
}


/* 

*/