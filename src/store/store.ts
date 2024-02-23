import { configureStore } from '@reduxjs/toolkit';
import { appSlice, authSlice, diarySlice } from './slices';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    auth: authSlice.reducer,
    diary: diarySlice.reducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
