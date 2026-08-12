import React, { useState } from 'react'
import './Auth.css'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const[showPassword , setShowPassword] = useState(false)
  const[loginError , setLoginError] = useState({
    lusername : '',
    lpassword : ''
  })
  const navigate = useNavigate();
  const [loginInfo , setLoginInfo] = useState({
    lusername : '',
    lpassword:''
  })

  function loginChangeHandler (event){
    const{name , value} = event.target
      setLoginInfo((prev)=>{
        return{
          ...prev,
          [name] : value
        }
      })
      
      setLoginError((prev)=>{
          return{
            ...prev,
          [name] : null}
      })
  }

  function login (){

    let newLoginErrors ={
      lusername:'',
      lpassword :''
    }
      if ( loginInfo.lusername.trim() === ''){
        newLoginErrors.lusername = 'Username is required'
      }

      if ( loginInfo.lpassword.trim() === ''){
        newLoginErrors.lpassword = 'Password is required'
      }

      setLoginError(newLoginErrors) ;

      if(newLoginErrors.lusername || newLoginErrors.lpassword) {
        return;
      }

      navigate('/dashboard');
  }


  return (
    <div className='login-layout'>  
      <div className='login-card'>
        <h3>Welcome Back ! Sign In to Continue</h3>
        <div className='form-group'>
            <div className='login-input-container'>
                <label>Email</label>
                <MdEmail className='input-icon'/>
                <input 
                  type='email' 
                  placeholder='abc@gmail.com' 
                  className={loginError.lusername ? 'input error-input':'input'}
                  value={loginInfo.lusername}
                  onChange={loginChangeHandler}
                  name='lusername'></input>
            </div>
            <p className='error1' >{loginError.lusername}</p>
        </div>
        <div className='form-group'>
            <div className='login-input-container'>
                <label>Password</label>
                <RiLockPasswordFill className='input-icon'/>
                <input 
                  type={showPassword ? 'text' :'password'} 
                  placeholder='*******' 
                  className= {loginError.lpassword ? 'input error-input':'input'}
                  value={loginInfo.lpassword}
                  onChange={loginChangeHandler}
                  name='lpassword'></input>
                <span  className='eye-icon' onClick={()=>setShowPassword(!showPassword)}>
                    {showPassword ? <FaEye /> :<FaEyeSlash />}
                </span>
            </div> 
            <p className='error1'>{loginError.lpassword}</p> 
        </div>    
      <Link className='forgt-pass' to='/forgotPassword'>Forgot Password ?</Link>
      <button onClick={login}>Login</button>
      <p>Don't have an account?  <Link className='sign-up' to='/register'>Sign Up </Link> </p>
      </div>
    </div>
  )
}

export default Login