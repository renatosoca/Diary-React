import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  NextOrObserver,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  Unsubscribe,
  updateProfile,
  User,
} from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';
import { firebaseAuth, firebaseDB } from '@/config/firebase';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const singInWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(firebaseAuth, googleProvider);

    const { uid, displayName, email, photoURL } = user;

    return {
      ok: true,
      user: {
        uid: uid ?? '',
        displayName: displayName ?? '',
        email: email ?? '',
        photoURL: photoURL ?? '',
      },
    };
  } catch (error: any) {
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const singInWithFacebook = async () => {
  try {
    const { user } = await signInWithPopup(firebaseAuth, facebookProvider);

    const { uid, displayName, email, photoURL } = user;

    return {
      ok: true,
      user: {
        uid: uid ?? '',
        displayName: displayName ?? '',
        email: email ?? '',
        photoURL: photoURL ?? '',
      },
    };
  } catch (error: any) {
    console.log(error);
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const authStateChanged = (callback: NextOrObserver<User>): Unsubscribe => {
  return onAuthStateChanged(firebaseAuth, callback);
};

export const signInWithEmailPassword = async ({ email, password }: { email: string; password: string }) => {
  try {
    const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);

    const { uid, displayName, photoURL } = user;

    return {
      ok: true,
      user: {
        uid: uid ?? '',
        displayName: displayName ?? '',
        email: email ?? '',
        photoURL: photoURL ?? '',
      },
    };
  } catch (error: any) {
    return {
      ok: false,
      errorMessage: 'Usuario o contraseña incorrectos',
    };
  }
};

export const registerUser = async ({ email, password, fullName }: { email: string; password: string; fullName: string }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password);

    if (firebaseAuth.currentUser) await updateProfile(firebaseAuth.currentUser, { displayName: fullName });

    const { uid, photoURL } = user;

    return {
      ok: true,
      user: {
        uid: uid ?? '',
        displayName: fullName ?? '',
        email: email ?? '',
        photoURL: photoURL ?? '',
      },
    };
  } catch (error: any) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const logoutFirebase = async () => {
  return await firebaseAuth.signOut();
};

export const getFirebaseApi = async (url: string) => {
  const docs = await getDocs(collection(firebaseDB, url));

  return docs;
};

export const postFirebaseApi = async <T extends Object>(url: string, data: T) => {
  const createdDoc = await addDoc(collection(firebaseDB, url), data);

  return createdDoc;
};

export const putFirebaseApi = async <T extends Object>(url: string, data: T, merge = true) => {
  const updatedDoc = await setDoc(doc(firebaseDB, url), data, { merge: merge });

  return updatedDoc;
};

export const deleteFirebaseApi = async (url: string) => {
  const deletedDoc = await deleteDoc(doc(firebaseDB, url));

  return deletedDoc;
};
