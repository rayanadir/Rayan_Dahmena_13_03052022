import React from 'react'
import '../feature/Feature.scss'

const Feature = (props) => {
  return (
    <div className="feature-item">
        <img src={props.src} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{props.title}</h3>
        <p>{props.description}</p>
    </div>
  )
}

export default Feature