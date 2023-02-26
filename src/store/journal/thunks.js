
import { collection, addDoc } from 'firebase/firestore';
import { firebaseDB } from '../../firebase/config';
import { loadNotes } from '../../helpers';

import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes } from './';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch( savingNewNote() );

    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    const newDoc = await addDoc(collection( firebaseDB, `${uid}/journal/notes` ), newNote);
    newNote.id = newDoc.id;
    
    dispatch( addNewEmptyNote( newNote ) );
    dispatch( setActiveNote( newNote ) );
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if ( !uid ) throw new Error('uid is required');

    const notes = await loadNotes( uid );

    dispatch( setNotes( notes ) );
  }
}