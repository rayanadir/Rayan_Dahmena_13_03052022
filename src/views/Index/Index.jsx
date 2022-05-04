import React from 'react'
import Hero from '../../components/hero/Hero'
import Nav from '../../components/nav/Nav'
import Features from '../../containers/features/Features'

const Index = () => {
  return (
    <>
        <Nav page="index"/>
        <main>
            <Hero />
            <Features />
        </main>
    </>
  )
}

export default Index
