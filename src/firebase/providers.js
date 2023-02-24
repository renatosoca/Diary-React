import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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