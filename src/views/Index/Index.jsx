import React, { useEffect } from 'react'
import Hero from '../../components/hero/Hero'
import Nav from '../../components/nav/Nav'
import Features from '../../containers/features/Features'
import { useNavigate } from 'react-router-dom';
import { useSelector  } from 'react-redux';

/**
 * Creates Index page component
 * @returns { HTMLElement }
 */
const Index = () => {
  document.title="Argent Bank - Home Page";
  const navigate = useNavigate()
  const token= useSelector((state)=> state.login.token)
  const logoClick= useSelector((state) =>  state.login.logoClick)
  useEffect(()=>{
    if((token !== null || localStorage.getItem('token') !== null) && logoClick!==true){
      navigate('/profile')
    }else if (logoClick===true){
      navigate('/')
    }
  },[token, navigate,logoClick])
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
