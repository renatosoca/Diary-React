import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    saveMessage: '',
    notes: [],
    active: null,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
      state.saveMessage = '';
    },
    addNewEmptyNote: (state, { payload }) => {
      console.log(payload, 'addNewEmptyNote')
      state.notes = [ payload, ...state.notes];
      state.isSaving = false;
    },
    setActiveNote: (state, { payload }) => {
      state.active = payload;
      state.saveMessage = '';
    },
    setNotes: (state, { payload }) => {
      console.log(payload, 'setNotes')
      state.notes = payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.saveMessage = '';
    },
    updateNote: (state, { payload }) => {
      state.isSaving = false;
      state.notes = state.notes.map( note => note.id === payload.id ? payload : note );
      state.saveMessage = `${ payload.title }, Actualizado correctamente`
    },
    deleteNoteById: (state, { payload }) => {

    },
  },
});

export const { 
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById
} = journalSlice.actions;