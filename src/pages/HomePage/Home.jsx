import React, { useEffect, useState } from 'react'
import imageData from './imageData'
import './Home.css'
import { GoDotFill } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import catagories from './CatagoriesData'
import img from '../../assets/homePage/second_img.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BannerFirstPhoto from '../../assets/homePage/BannerFirstPhoto.png'
import BannerSecondPhoto from '../../assets/homePage/BannerSecondPhoto.png'
import {products} from '../../data/products'
const Home = () => {
  const [pdts,setpdts]=useState([])
  useEffect(()=>{
    setpdts(products.filter(item=>item))
  },[products])
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black",borderRadius:'50%' }}
        onClick={onClick}
      />
    );
  }
 
  const [selectedImage,setSelectedImage]=useState(0);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow:<Arrow/>,
    prevArrow: <Arrow/>,
    responsive: [
      {
        breakpoint: 1445,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint:743,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint:500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };

  let timeout=setTimeout(()=>{
     if(selectedImage<=3)
     {
      setSelectedImage(selectedImage+1)
     }
     else
     {
      setSelectedImage(0)
     }
  },5000)
  const HandleCrosalLeft=()=>{
    if(selectedImage>0)
    {
     setSelectedImage(selectedImage-1)
    }
    else
    {
     setSelectedImage(4)
    }
    setTimeout(timeout)
  }
  const HandleCrosalRight=()=>{
    if(selectedImage<=3)
    {
     setSelectedImage(selectedImage+1)
    }
    else
    {
     setSelectedImage(0)
    }
    setTimeout(timeout)
  }
  return (
    <div className='min-h-[100vh]'>
         <div className='CrousalHomeMainContainer '> 
        <FaChevronLeft className='absolute z-[3] left-2 top-1/2  text-white' size={30} onClick={()=>{clearTimeout(timeout);HandleCrosalLeft(); }} /> <FaChevronRight className='absolute z-[3] right-2 top-[50%] text-white' size={30} onClick={()=>{clearTimeout(timeout);HandleCrosalRight()}}/>
                  {imageData.map((item,index)=><div key={index} className={selectedImage==index?'CrousalHomeContainerImageDiv isSelected':'isNotSelected'}>
                    <div className='absolute w-full h-full top-0 z-[1] CrousalHomeContainerOverlay'></div> <img src={item.src} alt="" className={(index==2||index==4)?'CrousalHomeContainerImage object-right':'CrousalHomeContainerImage object-center'} />
                        <div className='CrousalHomeContainerTextDiv'>
                            <div className=' text-6xl text-white CrousalHomeContainerTextHead caveat-custom'>{item.dataHead}</div>
                            <div className='text-4xl text-white CrousalHomeContainerTextDesc'>{item.dataDesc}</div>
                        </div>
                     </div>)}
                     <div className='absolute bottom-4 flex w-[100vw] justify-center z-[2]'>
                     {imageData.map((item,index)=><GoDotFill key={index} className={selectedImage==index?'text-rose-900':'text-white '} />)}
                     </div>
         </div>
         <div className='ContainerImages2 '>
           <div className='ContainerImage4 relative'>
            <div className='absolute dancing-script-Customtext  sm:text-3xl md:text-4xl lg:text-5xl text-3xl Image4Text'> <div className=' inTextImage4 text-black p-[1vw]'> <div> Silver Jewellery</div> <div className='w-full flex justify-center font-serif font-extralight sm:text-xl text-sm'>Shop Now</div></div></div>
            <img src="https://res.cloudinary.com/dimqqgecs/image/upload/v1711947279/xppscsjah7nrysq9vqmh.png" alt="" />
           </div>
           <div className='ContainerImage2'>
            <img src={img} alt="" />
                <video src="https://res.cloudinary.com/dimqqgecs/video/upload/v1711984934/r3yisbaqkqdrs1b1grcl.mp4" autoPlay loop muted typeof='mp4'></video>
           </div>
         </div>

         <div className='CatagoriesContainer'>
                    <div className='CatagoriesContainerText'>
                          <div className='sm:text-4xl text-2xl font-semibold CatagoriesContainerMainHead'>Shop by category</div>
                          <div className='sm:text-xl text-xs CatagoriesContainerDesc'>Browse through your favourite categories. We've got them all!</div>
                    </div>
                    <div className='CatagoriesContainerAllCat '>
                    <Slider {...settings}>
                   {catagories.map(item=> <div className='CatagoriesCont'>
                                <div className='ImageOfCatagories rounded-t-xl'><img src={item.src} alt="" /></div>
                                <div className='Catagoriesdata rounded-b-xl'>
                                  <div className='CustomCatagoryColor '>{item.name}</div>
                                  <div className='text-white text-xs font-thin'>Exoplore &gt;</div>
                                </div>
                      </div> )}
                      </Slider>
                    </div>
         </div>

         {/* Banner1 */}

         <div className='Banner1Div'>
                <div className='Banner1InnerDiv'>
                  <div className='Banner1FirstPhoto'><img src={BannerFirstPhoto} alt="" /></div>
                  <div className='Banner1Text'>
                    <div className='text-white sm:text-xl text-base'>Silver-Dimonds Earrings</div>
                    <div className='text-white sm:text-sm text-xs font-thin flex text-center'>Indulge in the allure of our Silver Diamond Earrings, where classic beauty meets contemporary design. Crafted with precision and passion, each piece is a testament to our commitment to quality and style.</div>
                    <div className='CustomCatagoryColor sm:text-sm text-xs underline'>VIEW PRODUCTS</div>
                  </div>
                  <div className='Banner1SecondPhoto'><img src={BannerSecondPhoto} alt="" /></div>
                </div>
         </div>


         {/* Products1 */}
         <div className='Products1'>
          <div className=''>
            Check All Products
          </div>
          <div className='Products1Maindiv'>
          <Slider {...settings}>
                   {pdts.map(item=><div className='Products1productDiv'>
                    <div className='Products1ImageDiv'><img src={item.images[0]} alt="" /></div>
                    <div className='Products1DataDiv'>
                      <div>{item.name}</div>
                      <div>{item.metal.weightInGram}</div>
                    </div>
                   </div> )}
                      </Slider>
          </div>
         </div>
    </div>
  )
}

export default Home
