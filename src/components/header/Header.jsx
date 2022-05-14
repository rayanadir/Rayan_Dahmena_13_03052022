import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const user= useSelector((state)=> state.user);
  const [edit, showEdit] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] =  useState('');



  return (
    <div className="header">
        <h1>Welcome back<br />{edit === false ? user.firstName + ' ' + user.lastName : ""}</h1>
        {
          edit === false ? 
            <button className="edit-button" onClick={()=>{showEdit(true)}}>Edit Name</button> 
          : 
          <form className='edit-inputs-buttons'>
            <div className='edit-inputs'>
              <input type="text" className='edit-input' onChange={(e)=>{setFirstName(e.target.value)}} placeholder={user.firstName} required/>
              <input type="text" className='edit-input' onChange={(e)=>{setLastName(e.target.value)}} placeholder={user.lastName} required/>
            </div>
            <div className='edit-buttons'>
              <button className='edit-button-option' onClick={()=>{showEdit(false)}}>Save</button>
              <button className='edit-button-option' onClick={()=>{showEdit(false)}}>Cancel</button>
            </div>
          </form>
        }
    </div>
  )
}

export default Header