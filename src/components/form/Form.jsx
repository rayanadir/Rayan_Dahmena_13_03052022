import React from 'react'
import '../form/Form.scss'

const Form = () => {
  return (
    <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          {/* PLACEHOLDER DUE TO STATIC SITE */} 
          <a href="./user.html" className="sign-in-button">Sign In</a>
          {/*SHOULD BE THE BUTTON BELOW */}
          {/*<button className="sign-in-button">Sign In</button>*/}
        </form>
  )
}

export default Form