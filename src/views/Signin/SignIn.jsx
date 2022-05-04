import React from 'react';
import Nav from '../../components/nav/Nav';
import SignInContent from '../../containers/signIn/SignInContent';

const SignIn = () => {
  return (
    <>
        <Nav page="signIn"/>
        <main className='sign-in-content'>
            <SignInContent />
        </main>
    </>
  )
}

export default SignIn