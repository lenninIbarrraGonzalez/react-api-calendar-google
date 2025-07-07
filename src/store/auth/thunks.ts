// import { singInWithGoogle } from '../../firebase';
import { checkingCredentials, login } from './';
import type { AppDispatch } from '../store';
import { singInWithGoogle } from '../../firebase';

export const checkingAuthentication = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());

    const result = await singInWithGoogle();
    // if (!result.ok) return dispatch(logout(result.errorMessage));
    if (result.ok) {
      const { displayName, email, photoURL, uid, calendarEvents } = result;
      dispatch(
        login({
          displayName: displayName ?? '',
          email: email ?? '',
          photoURL: photoURL ?? '',
          uid: uid ?? '',
          calendarEvents: calendarEvents ?? [],
        }),
      );
    }
  };
};
