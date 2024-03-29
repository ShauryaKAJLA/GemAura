import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/HomePage/Home";
import Login_SignUp from "./pages/login_signup/Login_SignUp";
import Signup from "./pages/login_signup/Signup";
import Login from "./pages/login_signup/Login";
import {Cart} from './pages/cart/Cart'
import {Product} from './products/Product'
import ProductInfo from "./pages/productInfo/productInfo";
import ErrorPage from "./pages/Reusable/404Error/errorPage";
import NavBar from "./pages/Reusable/Navbar/NavBar";
import Footer from "./pages/Reusable/Footer/Footer";
import About_us from "./pages/AboutUs/About_us";
import Contactus from "./pages/ContactUs/Contactus";
const router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children: [
            {
          index:true,
          element:<Home/>
        },
        {
            path:'/cart/',
            element:<Cart/>
        },
        {
            path:'/products/',
            element:<Product/>
        },
        {
            path:'/productInfo/:id',
            element:<ProductInfo/>
        },
        {
            path:'/Aboutus/',
            element:<About_us/>
        },
        {
            path:'/Contactus/',
            element:<Contactus/>
        }

    ],errorElement:<div className="overflow-hidden h-screen"> <NavBar/> <div className="min-h-[92vh] h-[92vh]   overflow-x-hidden overflow-y-scroll relative"><ErrorPage/> <Footer/></div></div>
    },
    {
        path:'/Login_Signup/',
        element:<Login_SignUp/>,
        children:[{
            index:true,
            element:<Signup/>
        },
        {
            path:'/Login_Signup/login',
            element:<Login/>
        }
    ]
    },
 
]
)
export default router;