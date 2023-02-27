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
      state.notes = [ payload, ...state.notes];
      state.isSaving = false;
    },
    setActiveNote: (state, { payload }) => {
      state.active = payload;
      state.saveMessage = '';
    },
    setNotes: (state, { payload }) => {
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
    setImagesToActiveNotes: (state, { payload }) => {
      state.active.imageUrls = [...state.active.imageUrls, ...payload];
      state.isSaving = false;
    },
    deleteNoteById: (state, { payload }) => {
      state.notes = state.notes.filter( note => note.id !== payload );
      state.active = null;
      state.isSaving = false;
    },
    clearStateLogout: (state) => {
      state.isSaving = false;
      state.saveMessage = '';
      state.notes = [];
      state.active = null;
    },
  },
});

export const { 
  addNewEmptyNote,
  clearStateLogout,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setImagesToActiveNotes,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;