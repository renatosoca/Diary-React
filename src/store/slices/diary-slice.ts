import { createSlice } from '@reduxjs/toolkit';
import { dairyInitialState } from '@/domain/entities';

export const diarySlice = createSlice({
  name: 'diary',
  initialState: dairyInitialState,
  reducers: {
    onLoadingNotes: (state, { payload = 'loading' }) => {
      state.status = payload;
    },
    setNotes: (state, { payload }) => {
      state.status = 'init';
      state.notes = payload;
    },
    setActiveNote: (state, { payload }) => {
      state.status = 'init';
      state.active = payload;
    },
    addNewEmptyNote: (state, { payload }) => {
      state.status = 'init';
      state.notes = [payload, ...state.notes];
      state.active = payload;
    },
    updateNote: (state, { payload }) => {
      state.status = 'init';
      state.notes = state.notes.map((note) => (note.id === payload.id ? payload : note));
      state.saveMessage = `${payload.title}, Actualizado correctamente`;
      state.active = undefined;
    },
    setImagesToActiveNotes: (state, { payload }) => {
      state.status = 'init';
      state.active = state.active && {
        ...state.active,
        imageUrls: payload,
      };
    },
    deleteNoteById: (state, { payload }) => {
      state.status = 'init';
      state.notes = state.notes.filter((note) => note.id !== payload);
      state.active = undefined;
    },
    clearStateLogout: () => {
      return dairyInitialState;
    },
  },
});

export const {
  onLoadingNotes,
  setNotes,
  setActiveNote,

  addNewEmptyNote,
  clearStateLogout,
  deleteNoteById,
  setImagesToActiveNotes,
  updateNote,
} = diarySlice.actions;
