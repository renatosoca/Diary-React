import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';

export const useCheckAuth = () => {
  const dispatch = useDispatch();
  const { status } = useSelector( state => state.auth);

  useEffect(() => {
    onAuthStateChanged( firebaseAuth, async ( user ) => {
      if ( !user ) return dispatch( logout() );
      const { uid, displayName, email, photoURL } = user;
      
      dispatch( login({ uid, displayName, email, photoURL }) );
    } )
  }, []);

  return {
    status
  }
}
