import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBcrK_53TUNnFluBCFHOLnHqjh6-qj9ow4",
  authDomain: "diario-react-3af11.firebaseapp.com",
  projectId: "diario-react-3af11",
  storageBucket: "diario-react-3af11.appspot.com",
  messagingSenderId: "1040599268526",
  appId: "1:1040599268526:web:5f9f7707835dbea098c13f"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth( firebaseApp );
export const firebaseDB = getFirestore( firebaseApp );