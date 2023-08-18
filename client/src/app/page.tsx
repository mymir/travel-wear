'use client'

import Grid from '@mui/material/Grid';

import { useEffect } from 'react';
import { useAuthContext } from '../context/store';

export default function Home() {
  const {uid, setUid, username, setUsername, loggedIn, setLoggedIn} = useAuthContext();

  // useEffect(() => {
  //   setUid(1);
  //   setUsername('Laura');
  //   setLoggedIn(true);
  // })

  return (
    <>
      <h2>Id: {uid}</h2>
      <h2>Username: {username}</h2>
      <h2>Logged in: {loggedIn? 'true' : 'false'}</h2>
    </>
  )
}
