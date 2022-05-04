import React from 'react'
import '../nav/Nav.scss'
import PropTypes from 'prop-types'

const Nav = (props) => {
  return (
      <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        {
        props.page === "index" || props.page === "signIn" ?
          <div>
            <a className="main-nav-item" href="./sign-in.html">
              <i className="fa fa-user-circle"></i>
              Sign In
            </a>
          </div> 
          : props.type === "user" ? 
          <div>
            <a className="main-nav-item" href="./user.html">
              <i className="fa fa-user-circle"></i>
              Tony
            </a>
            <a className="main-nav-item" href="./index.html">
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