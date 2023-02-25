import { registerUser, singInWidthGoogle } from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./";

export const checkingAuthenticate = () => {
  return async (dispatch) => {
    dispatch( checkingCredentials() );
  }
}

export const startGoogleLogin = () => {
  return async (dispatch) => {
    dispatch( checkingCredentials() );

    const result = await singInWidthGoogle();

    if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

    dispatch( login( result ) );
  }
}

export const startCreateUser = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch( checkingCredentials() );

    const { ok, errorMessage, photoURL, uid } = await registerUser({ email, password, displayName });

    if ( !ok ) return dispatch( logout({ errorMessage }) );

    dispatch( login({ uid, displayName, email, photoURL }) );
  }
}