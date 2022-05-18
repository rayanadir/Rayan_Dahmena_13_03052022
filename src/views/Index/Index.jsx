import React from 'react'
import Hero from '../../components/hero/Hero'
import Nav from '../../components/nav/Nav'
import Features from '../../containers/features/Features'

/**
 * Creates Index page component
 * @returns { HTMLElement }
 */
const Index = () => {
  document.title="Argent Bank - Home Page";
  return (
    <>
        <Nav />
        <main className='main'>
            <Hero />
            <Features />
        </main>
    </>
  )
}

export default Index
