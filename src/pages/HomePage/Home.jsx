import React, { useState } from 'react'
import imageData from './imageData'
import './Home.css'
import { GoDotFill } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
const Home = () => {
  const [selectedImage,setSelectedImage]=useState(0);


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
         <div>
           <div>
            <img src="https://res.cloudinary.com/dimqqgecs/image/upload/v1711947279/xppscsjah7nrysq9vqmh.png" alt="" />
           </div>
           <div>
            <img src="" alt="" />
                <video src="https://res.cloudinary.com/dimqqgecs/video/upload/v1711946600/o1cpsca6fcxrflbqylgs.mp4" autoPlay loop muted typeof='mp4'></video>
           </div>
         </div>
    </div>
  )
}

export default Home
