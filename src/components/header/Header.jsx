import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  return (
    <div className="header">
        <h1>Welcome back<br />{props.name}</h1>
        <button className="edit-button">Edit Name</button>
      </div>
  )
}

Header.propTypes = {
    name:PropTypes.string
}

export default Header