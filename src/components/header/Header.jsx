import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const user= useSelector((state)=> state.user)
  return (
    <div className="header">
        <h1>Welcome back<br />{user.firstName + ' ' + user.lastName}</h1>
        <button className="edit-button">Edit Name</button>
      </div>
  )
}

export default Header