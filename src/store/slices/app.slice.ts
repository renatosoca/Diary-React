import { createSlice } from '@reduxjs/toolkit';
import { appInitialState } from '@/domain/entities';

export const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    setOpenSidebar: (state, { payload = true }) => {
      state.isOpenSidebar = payload;
    },
  },
});

export const { setOpenSidebar } = appSlice.actions;
