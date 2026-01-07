import React, {  useState , useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const {setLoggedInUser} = useContext(AppContext);
   const [currentState, setCurrentState] = useState("Sign Up");
   const [formdata, setFormData] = useState({Name: '', Email:'', Password:''});
 
   const navigate =useNavigate();

  //   Signup API  
  const signupUser = async () => {
   
    const response = await axios.post(
      `${import.meta.env.VITE_CLIENT_URL}/api/auth/signup`,
      {
        name: formdata.Name,
        email: formdata.Email,
        password: formdata.Password,
      }
    );
    return response;

  };
 
  //  Login API  
  const loginUser = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_CLIENT_URL}/api/auth/login`,
      {
        email: formdata.Email,
        password: formdata.Password,
      }
    );
    return response;
  };

  //   Input Change 
  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  //   Form Submit  
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      let response;

      if (currentState === "Sign Up") {
        
        response = await signupUser();
        if(response.data?.success){
          setLoggedInUser(response.data.UserData);
          localStorage.setItem("loginData", response.data.UserData?JSON.stringify(response.data.UserData):'');
          toast.success("Signup successful");
        } 
      } else {
   
        response = await loginUser();
         if(response.data?.success){
         setLoggedInUser(response.data.UserData);
          localStorage.setItem("loginData", response.data.UserData?JSON.stringify(response.data.UserData):'');
          toast.success("login successful");
         }
      }

      console.log("API Response:", response.data);
        
      navigate("/");

    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.error(error, "API Error");
    }
  };

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
