import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { firebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const singInWidthGoogle = async () => {
  try {
    const result = await signInWithPopup( firebaseAuth , googleProvider);
    /* const credentials = GoogleAuthProvider.credentialFromResult(result); */
    const { uid, displayName, email, photoURL } = result.user;

    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL
    }

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}

export const registerUser = async ({ email, password, displayName }) => {
  try {
    const resp = await createUserWithEmailAndPassword( firebaseAuth, email, password );
    const { uid, photoURL } = resp.user;

    await updateProfile( firebaseAuth.currentUser, { displayName } );

    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL,
    }
  } catch (error) {
    
    console.log(error.code)
    console.log(error.message)
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}

export const signInWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword( firebaseAuth, email, password );
    const { uid, displayName, photoURL } = resp.user;

    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL,
    }
  } catch (error) {
    console.log(error.code)
    return {
      ok: false,
      errorMessage: error.code
    }
  }
}

export const logoutFirebase = async () => {
  return await firebaseAuth.signOut();
}