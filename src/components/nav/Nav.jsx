import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import argentBankLogo from '../../img/argentBankLogo.png';
import auth_service from '../../services/auth.service';

const Nav = () => {
  const user= useSelector((state)=> state.user);
  const token= useSelector((state)=> state.login.token);
  
  return (
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {
        token === null ?
          <div>
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div> 
          : token !== null ? 
          <div className='main-nav-items'>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {user.firstName}
            </Link>
            <a className="main-nav-item" onClick={auth_service.logout} href="/">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </div> : ""
          }
      </nav>
  )
}

export default Nav