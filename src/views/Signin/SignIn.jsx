import React from 'react';
import Nav from '../../components/nav/Nav';
import SignInContent from '../../containers/signIn/SignInContent';

/**
 * Creates SignIn page Component
 * @returns { HTMLElement }
 */
const SignIn = () => {
  document.title="Argent Bank - Login Page"
  return (
    <>
        <Nav />
        <main className='main bg-dark'>
            <SignInContent />
        </main>
    </>
  )
}

export default SignIn