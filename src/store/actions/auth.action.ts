import { AppDispatch, clearStateLogout, onCheckingCredentials, onLogin, onLogout } from '..';
import {
  authStateChanged,
  logoutFirebase,
  registerUser,
  signInWithEmailPassword,
  singInWithFacebook,
  singInWithGoogle,
} from '@/config/firebase';
import { clearAllCookies, cookieNames, setCookies } from '@/shared/utils';

export const startGoogleLogin = () => {
  return async (dispatch: AppDispatch) => {
    const { user, errorMessage } = await singInWithGoogle();

    if (errorMessage) return dispatch(onLogout(errorMessage));

    setCookies(cookieNames.auth, JSON.stringify(user));

    dispatch(onLogin(user));
  };
};
export const startFacebookLogin = () => {
  return async (dispatch: AppDispatch) => {
    const { user, errorMessage } = await singInWithFacebook();

    if (errorMessage) return dispatch(onLogout(errorMessage));

    setCookies(cookieNames.auth, JSON.stringify(user));

    dispatch(onLogin(user));
  };
};
export const startRegisterRedirect = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(onCheckingCredentials());

    authStateChanged((user) => {
      if (!user) return dispatch(onLogout(undefined));

      const { uid, displayName, email, photoURL } = user;

      setCookies(cookieNames.auth, JSON.stringify(user));

      dispatch(onLogin({ uid, displayName, email, photoURL }));
    });
  };
};

export const startLoginEmailPassword = ({ email, password }: { email: string; password: string }) => {
  return async (dispatch: AppDispatch) => {
    dispatch(onCheckingCredentials());

    const { user, errorMessage } = await signInWithEmailPassword({ email, password });

    if (errorMessage) return dispatch(onLogout(errorMessage));

    dispatch(onLogin(user));
  };
};

export const startCreateUser = ({ email, password, fullName }: { email: string; password: string; fullName: string }) => {
  return async (dispatch: AppDispatch) => {
    dispatch(onCheckingCredentials());

    const { ok, user } = await registerUser({
      email,
      password,
      fullName,
    });

    if (!ok) return dispatch(onLogout(undefined));

    dispatch(onLogin(user));
  };
};

export const startLogout = () => {
  return async (dispatch: AppDispatch) => {
    await logoutFirebase();

    clearAllCookies();
    dispatch(clearStateLogout());
    dispatch(onLogout(undefined));
  };
};
