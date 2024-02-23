import { createSlice } from '@reduxjs/toolkit';
import { authInitialSate } from '@/domain/entities';
import { getUserByToken } from '@/shared/utils';

export const authSlice = createSlice({
  name: 'auth',
  initialState: getUserByToken(),
  reducers: {
    onCheckingCredentials: (state) => {
      state.isLoading = true;
    },
    onLogin: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = undefined;
      state.user = payload;
    },
    onLogout: (_, { payload }) => {
      return {
        ...authInitialSate,
        errorMessage: payload,
      };
    },
  },
});

export const { onCheckingCredentials, onLogin, onLogout } = authSlice.actions;
