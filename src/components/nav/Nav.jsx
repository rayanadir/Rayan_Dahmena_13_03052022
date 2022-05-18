import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import argentBankLogo from '../../img/argentBankLogo.png';
import auth_service from '../../services/auth.service';

/**
 * Creates Nav component
 * @returns { HTMLElement }
 */
const Nav = () => {
  const user= useSelector((state)=> state.user);
  const token= useSelector((state)=> state.login.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout= () => {
    dispatch(auth_service.logout());
    navigate('/')
  }
  
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
            <span className="main-nav-item" onClick={onLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </span>
          </div> : ""
          }
      </nav>
  )
}

export default Nav