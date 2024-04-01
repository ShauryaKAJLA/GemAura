import { addToCart } from '../pages/cart/CartSlice'
import { useDispatch, useSelector} from "react-redux"
import { FaRegHeart } from "react-icons/fa";
import { toast } from 'react-toastify'
import Filter from './Filter';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './Product.css'
export function Product()
{
    const products =useSelector(state=>state.FilteredProducts.products)
    const dispatch=useDispatch()
  
    return(
<div className='flex flex-col  overflow-x-hidden'>
    <div className='filter'>
        <Filter />
    
    </div>
    <div className='pros'><div className='my-4 text-2xl w-[100vw] flex justify-center  h-7 font-semibold '>All Products</div>
        <div className='flex h-auto w-[100vw] flex-wrap overflow-y-scroll proCont pb-4 '>
           
            {    
                products.length ? products.map(item=><div key={item.id} className=' m-2 gap-y-1 w-[200px] h-[310px] flex flex-col proDiv justify-center'>
                       <Link to={`/productInfo/${item.id}`}>
                       <div className=' bg-black w-[200px] h-[250px] rounded-[15px] flex justify-center flex-wrap items-center proUp'>
                       
                        <img src={item.images[0]} className='  w-[200px] h-[200px]  rounded-[15px]  object-contain object-center proImg' />
                        <div className='text-white w-[200px] overflow-clip justify-center flex proName proNamePre'>
                            {item.name}
                        </div>
                       </div>
                       </Link>
                       <div>
                       <Link to={`/productInfo/${item.id}`}> <div className='hidden proNameAft font-bold text-sm '>{item.name}</div>  </Link>
                       <Link to={`/productInfo/${item.id}`}>
                       <div className='flex justify-between w-[200px] h-[25px] proMiddle'>
                        <div className='font-semibold proPrice'>
                           Rs.{item.Gem.totalPrice+item.metal.pricePerGram*item.metal.weightInGram}
                        </div>
                        <div className='text-xs font-semibold proStock'>
                            <div className={item.instock?'text-green-800':'text-red-800'}>{item.instock?"In stock":"out of stock"}</div>
                        </div>
                        </div>
                        </Link>
                        <div className='flex w-[200px] justify-between flex-wrap items-center proDown'>
 
                        <div className='text-white  bg-black w-[165px] h-[30px] rounded-[4px] flex justify-center text-sm proCart' onClick={()=>dispatch(addToCart((item))) } >
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