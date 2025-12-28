import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
   const [currentState, setCurrentState] = useState("Sign Up");
   const [formdata, setFormData] = useState({Name: '', Email:'', Password:''});
   const navigate =useNavigate();
 
  function changeHandler(event) {
   console.log(event)
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  
  function onSubmitHandler(event){
     event.preventDefault();
    console.log(formdata);
    toast.success("Successfully LoggedIn")
    navigate('/')
  }


  return (
   <form  onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800' >
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
           </div>
           {currentState==='Login' ? '' :<input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name'  name="Name" required value={formdata.Name} onChange={changeHandler}/>}
          <input type="Email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required value={formdata.Email} name="Email" onChange={changeHandler}/>
          <input type="Password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required value={formdata.Password}  name="Password" onChange={changeHandler}/>
        <div className='w-full flex flex-col items-center gap-4 mt-[-8px]'>
          <div className='w-full flex justify-between text-sm'>
            <p className=' cursor-pointer'>Forget Password</p>
            {
              currentState==='Login' ?
               <p onClick={()=>(setCurrentState('Sign Up'))} className='cursor-pointer'>Create Account</p> :
               <p onClick={()=>(setCurrentState('Login'))} className=' cursor-pointer'>Login Here</p>
            }
          </div>
        <button type='submit'  className='bg-black text-white font-light px-8 py-2'>
          {currentState==='Login' ? 'Sign In' : 'Sign Up'}</button>
        </div>
   </form>
  )
}

export default Login
