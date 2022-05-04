import React from 'react'
import '../features/Features.scss'
import features from '../../data/features'
import Feature from '../../components/feature/Feature'

const Features = () => {
  return (
    <section className="features">
        <h2 className="sr-only">Features</h2>
        {
            features.map((feature)=>{
                return <Feature data={feature}/>
            })
        }
    </section>
  )
}

export default Features