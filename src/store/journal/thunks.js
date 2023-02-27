import { collection, addDoc, setDoc, doc, deleteDoc } from 'firebase/firestore';
import { firebaseDB } from '../../firebase/config';
import { fileSave, loadNotes } from '../../helpers';

import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote, setImagesToActiveNotes, deleteNoteById } from './';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch( savingNewNote() );

    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
      imageUrls: [],
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

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch( setSaving() );

    const { uid } = getState().auth;
    if ( !uid ) throw new Error('uid is required');

    const { active:note } = getState().journal;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await setDoc(doc( firebaseDB, `${uid}/journal/notes/${ note.id }` ), noteToFirestore, { merge: true } );

    dispatch( updateNote( note ) );
  }
}

export const startSaveImages = ( files = [] ) => {
  return async (dispatch, getState) => {
    dispatch( setSaving() );

    const { uid } = getState().auth;
    if ( !uid ) throw new Error('uid is required');

    const imagesUrl = await Promise.all( [...files].map( fileSave ) );
    
    dispatch( setImagesToActiveNotes( imagesUrl ) );
  }
}

export const startDeleteNote = () => {
  return async (dispatch, getState) => {
    /* dispatch( setSaving() ); */

    const { uid } = getState().auth;
    if ( !uid ) throw new Error('uid is required');
    const { active:note } = getState().journal;
    if ( !note ) throw new Error('note is required');
 
    await deleteDoc( doc( firebaseDB, `${ uid }/journal/notes/${ note.id }` ) );

    dispatch( deleteNoteById( note.id ) );
  }
}