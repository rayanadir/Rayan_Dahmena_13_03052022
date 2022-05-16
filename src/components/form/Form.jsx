import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import auth_service from '../../services/auth.service';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] =  useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  const token= useSelector((state)=> state.login.token)
  const error= useSelector((state)=> state.login.error)
  
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(auth_service.login(email, password, rememberMe));
  }

  useEffect(()=>{
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
        <input type="password" id="password" onChange={(e) => { setPassword(e.target.value) }} />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" onChange={(e) => { setRememberMe(e.target.value) }}/>
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button" type='submit'>Sign In</button>
      {error !== null ? <label className='error'>{error}</label>:""}
    </form>
  )
}

export default Form