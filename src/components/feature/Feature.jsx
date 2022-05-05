import React from 'react'
import '../feature/Feature.scss'
import PropTypes from 'prop-types'

const Feature = (props) => {
  return (
    <div className="feature-item">
        <img src={props.data.src} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{props.data.title}</h3>
        <p>{props.data.description}</p>
    </div>
  )
}

Feature.propTypes={
  data:PropTypes.object,
}

export default Feature