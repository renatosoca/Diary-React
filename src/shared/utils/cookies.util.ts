import Cookies from 'js-cookie';

export const cookieNames = {
  auth: 'user-auth',
};

export const setCookies = (cookieName: string, cookieValue: string) => {
  const expirationTimeInMinutes = 60;
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + expirationTimeInMinutes * 60 * 1000);

  return Cookies.set(cookieName, cookieValue, {
    expires: expirationDate,
    secure: false,
    sameSite: 'strict',
    httpOnly: false,
  });
};

export const getCookies = <T>(cookieName: string) => {
  const cookie = Cookies.get(cookieName);

  if (!cookie) return undefined;

  return JSON.parse(cookie) as T;
};

export const clearCookie = (cookieName: string) => {
  return Cookies.remove(cookieName, {
    expires: 1,
    secure: false,
    sameSite: 'strict',
  });
};

export const clearAllCookies = () => {
  clearCookie(cookieNames.auth);
};
