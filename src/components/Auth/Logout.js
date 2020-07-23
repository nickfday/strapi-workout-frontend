import React, { useCallback } from 'react';
import firebaseApp from '../../base.js';
import { useRouter, withRouter } from 'next/router';

const Logout = (props) => {
  const router = useRouter();
  const handleLogout = useCallback(async (event) => {
    event.preventDefault();
    try {
      await firebaseApp.auth().signOut();
      alert('You are signed out');
      router.push('/login');
    } catch (error) {
      alert(error);
    }
  }, []);

  return <div onClick={handleLogout}>{props.children}</div>;
};

export default Logout;
