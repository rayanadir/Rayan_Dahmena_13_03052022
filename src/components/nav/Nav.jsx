import React from 'react'
import '../nav/Nav.scss'
import PropTypes from 'prop-types'
import argentBankLogo from '../../img/argentBankLogo.png';

const Nav = (props) => {
  return (
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        {
        props.page === "index" || props.page === "signIn" ?
          <div>
            <a className="main-nav-item" href="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </a>
          </div> 
          : props.type === "user" ? 
          <div>
            <a className="main-nav-item" href="/profile">
              <i className="fa fa-user-circle"></i>
              Tony
            </a>
            <a className="main-nav-item" href="/">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </div> : ""
          }
      </nav>
  )
}

Nav.propTypes={
  page:PropTypes.string,
}

export default Nav