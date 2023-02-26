import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../firebase/config";


export const loadNotes = async ( uid = '' ) => {
  if ( !uid ) throw new Error('uid is required');

  const collectionRef = collection( firebaseDB, `${uid}/journal/notes` );
  const docs = await getDocs(collectionRef);
  
  let notes = [];
  docs.forEach( doc => {
    notes = [...notes, { id: doc.id, ...doc.data() }]
  } );
  
  return notes;
}
