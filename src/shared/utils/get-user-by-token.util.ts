import { IAuthState, IUser, authInitialSate } from '@/domain/entities';
import { cookieNames, getCookies } from './cookies.util';

export const getUserByToken = (): IAuthState => {
  const token = getCookies<IUser>(cookieNames.auth);

  if (!token) return authInitialSate;

  const { uid, displayName, email, photoURL } = token;

  return {
    ...authInitialSate,
    user: {
      uid,
      email,
      displayName,
      photoURL,
    },
  };
};
