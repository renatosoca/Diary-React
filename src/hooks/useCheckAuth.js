import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../firebase/config';
import { login, logout, startLoadingNotes } from '../store'; 

export const useCheckAuth = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector( state => state.auth);

  useEffect(() => {
    onAuthStateChanged( firebaseAuth, async ( user ) => {
      if ( !user ) return dispatch( logout(errorMessage) );
      const { uid, displayName, email, photoURL } = user;
      
      dispatch( login({ uid, displayName, email, photoURL }) );
      dispatch( startLoadingNotes() );
    } )
  }, []);

  return {
    status,
  }
}
