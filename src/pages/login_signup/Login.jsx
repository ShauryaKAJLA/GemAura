import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import sin from '../../assets/sin.jpg'
const Login = () => {
  
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
    <div className='flex flex-row papa'>
    <div className=' tra contlog flex flex-col justify-center'>
      <div className='msg flex flex-col justify-center gap-y-[3vh] my-1'> 
        <div className='text-custom text-4xl font-semibold '>WELCOME</div>
        <div className=' lg:text-lg md:text-base text-sm flex justify-center flex-wrap text-center ww'>Welcome back! please enter username and password</div>
      </div>
      <div className='main flex flex-col justify-center '>
    <div className=' text-custom text-4xl p-[3vh]'>Login</div>
        <div className='contfor '>
        <form onSubmit={handleSubmit(onSubmit)} className='form flex flex-col justify-center'>
          
            <input  className='pp inp fo hover:scale-105 transition-all' placeholder='Email'  {...register("Email",{required:{value:true,message:"This field is required"},minLength:{value:11,message:"Invalid Email name"}})}  />
            <div className='flex justify-center w-full text-red-300'>{errors.Email&&errors.Email.message}</div>
            <input  className='pp inp fo hover:scale-105 transition-all' placeholder='password' {...register("password", { required:{value:true,message:"This field is required"},minLength:{value:8,message:"Enter longer password"},pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/,message:"Generate a strong password"}})} />
            <div className='flex justify-center w-full text-red-300'>{errors.password&&errors.password.message}</div>   
      <input type="submit" disabled={isSubmitting} className=' sb hover:scale-105 transition-all flex justify-center flex-wrap items-center inp'/>
      
    </form>
        </div>
      </div>
    <Link to="/Login_SignUp/" className='mt-3 text-custom hover:underline md:text-base text-sm ' >Dont Have an account? / SignUp</Link>
  </div>
  <div className='contimg tra1' ><img src={sin} className='img'/></div></div>
  )
}

export default Login
