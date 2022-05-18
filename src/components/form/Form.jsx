import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import auth_service from '../../services/auth.service';

/**
 * Creates form component
 * @returns { HTMLElement }
 */
const Form = () => {
  const [email, setEmail] = useState(localStorage.getItem("email") !== null ? localStorage.getItem("email") : '');
  const [password, setPassword] = useState(localStorage.getItem("password") !== null ? localStorage.getItem("password") : '');
  const [rememberMe, setRememberMe] =  useState(localStorage.getItem("remember") !== null ? true : false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  const token= useSelector((state)=> state.login.token)
  const error= useSelector((state)=> state.login.error)
  
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(auth_service.login(email, password, rememberMe));
  }

  useEffect(()=>{
    if(localStorage.getItem("remember")==="true"){
      document.getElementById("email").value=localStorage.getItem("email");
      document.getElementById("password").value=localStorage.getItem("password");
      document.getElementById("remember-me").checked=true;
    }
    if(token !== null){
      navigate('/profile')
    }
  },[token, navigate])

  return (
    <form onSubmit={(e)=>{submitForm(e)}}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={(e) => { setEmail(e.target.value) }} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={(e) => { setPassword(e.target.value)}} />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" onChange={(e) => { setRememberMe(e.target.checked) }}/>
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button" type='submit'>Sign In</button>
      {error !== null ? <label className='error'>{error}</label>:""}
    </form>
  )
}

export default Form