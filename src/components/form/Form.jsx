import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import auth_service from '../../services/auth.service';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(auth_service.login(email, password));
  }

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
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button" type='submit'>Sign In</button>
    </form>
  )
}

export default Form