export interface IUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

export interface IAuthState {
  isLoading: boolean;
  errorMessage?: string;

  user?: IUser;
}

export const authInitialSate: IAuthState = {
  isLoading: false,
  errorMessage: undefined,
  user: undefined,
};
