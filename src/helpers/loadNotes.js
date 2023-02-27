import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../firebase/config";

export const loadNotes = async ( uid = '' ) => {
  if ( !uid ) throw new Error('uid is required');

  const docs = await getDocs( collection( firebaseDB, `${uid}/journal/notes` ) );
  
  let notes = [];
  docs.forEach( doc => {
    const docObj = { id: doc.id, ...doc.data() }

    notes = [ ...notes, docObj ];
  } );
  
  return notes;
}
