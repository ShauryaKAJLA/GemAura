import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import sin from '../../assets/sin.jpg'
const Signup = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors,isSubmitted,isSubmitting } } = useForm();
    const submitData=()=>{
      return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve();
      },1000)
    })
    }
const onSubmit =async (data) =>{ 
     await submitData();
    console.log(data)
};

  return (
    <div className='flex flex-row-reverse papa '> 
    <div className=' tra1 contlog flex flex-col justify-center'>
    <div className='msg flex flex-col justify-center gap-y-[3vh] my-1'> 
      <div className='text-custom text-4xl font-semibold '>WELCOME</div>
      <div className=' lg:text-lg md:text-base text-sm flex justify-center flex-wrap text-center ww'>Welcome! please enter username and password</div>
    </div>
    <div className='main flex flex-col justify-center '>
  <div className=' text-custom text-4xl p-[3vh]'>Sign Up</div>
      <div className='contfor '>
      <form onSubmit={handleSubmit(onSubmit)} className='form flex flex-col justify-center'>
        
      <input  className='pp inp fo hover:scale-105 transition-all' placeholder='Email'  {...register("Email",{required:{value:true,message:"This field is required"},minLength:{value:11,message:"Invalid Email name"}})}  />
            <div>{errors.Email&&errors.Email.message}</div>
            <input  className='pp inp fo hover:scale-105 transition-all' placeholder='password' {...register("password", { required:{value:true,message:"This field is required"},minLength:{value:8,message:"Enter longer password"},pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/,message:"Generate a strong password"}})} />
            <div>{errors.password&&errors.password.message}</div>   
      <input type="submit" disabled={isSubmitting} className=' sb hover:scale-105 transition-all flex justify-center flex-wrap items-center inp'/>
      
  </form>
      </div>
    </div>
      <Link to="/Login_SignUp/login" className='mt-3 text-custom hover:underline md:text-base text-sm'>Have an account? / login</Link>
    </div>
    <div className='contimg tra'><img src={sin} className='img'/></div> </div>
  )
}

export default Signup
