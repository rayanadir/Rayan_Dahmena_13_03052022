import React from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import Account from '../../components/account/Account';

const User = () => {
  return (
    <>
      <Nav page="user"/>
      <main className='main bg-dark'>
        <Header name='Tony Jarvis'/>
        <h2 className="sr-only">Accounts</h2>
        <Account title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance'/>
        <Account title='Argent Bank Savings (x6712)' amount='$10,928.42' description='Available Balance'/>
        <Account title='Argent Bank Credit Card (x8349)' amount='$184.30' description='Current Balance'/>
      </main>
    </>
  )
}

export default User