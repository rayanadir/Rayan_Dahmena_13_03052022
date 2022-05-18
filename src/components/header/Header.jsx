import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import auth_service from '../../services/auth.service';

/**
 * Creates header component
 * @returns { HTMLElement }
 */
const Header = () => {
  const user= useSelector((state)=> state.user);
  const firstName= useSelector((state) => state.user.firstName);
  const lastName= useSelector((state) => state.user.lastName);
  const [edit, showEdit] = useState(false);
  const dispatch = useDispatch();
  const token= useSelector((state)=> state.login.token);
  const [newFirstName, setFirstName] = useState('');
  const [newLastName, setLastName] =  useState('');

  const submit=(e)=>{
    e.preventDefault()
    dispatch(auth_service.updateProfile(newFirstName,newLastName,token));
    showEdit(false);
  }

  return (
    <div className="header">
        <h1>Welcome back<br />{edit === false ? firstName + ' ' + lastName : ""}</h1>
        {
          edit === false ? 
            <button className="edit-button" onClick={()=>{showEdit(true)}}>Edit Name</button> 
          : 
          <form className='edit-inputs-buttons' onSubmit={submit}>
            <div className='edit-inputs'>
              <input type="text" className='edit-input' onChange={(e)=>{setFirstName(e.target.value)}} placeholder={user.firstName} required/>
              <input type="text" className='edit-input' onChange={(e)=>{setLastName(e.target.value)}} placeholder={user.lastName} required/>
            </div>
            <div className='edit-buttons'>
              <button className='edit-button-option' type='submit'>Save</button>
              <button className='edit-button-option' onClick={()=>{showEdit(false)}}>Cancel</button>
            </div>
          </form>
        }
    </div>
  )
}

export default Header