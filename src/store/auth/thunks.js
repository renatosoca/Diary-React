import { singInWidthGoogle } from "../../firebase/providers";
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