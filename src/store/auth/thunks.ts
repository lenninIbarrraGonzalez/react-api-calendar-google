// import { singInWithGoogle } from '../../firebase';
import { checkingCredentials, login } from './';
import type { AppDispatch } from '../store';
import { fetchCalendarEvents, signInWithGoogle } from '../../firebase/provider';
import { setCalendarEvents } from '../calendar/CalendarSlice';

export const checkingAuthentication = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    // if (!result.ok) return dispatch(logout(result.errorMessage));
    if (result.ok) {
      const { displayName, email, photoURL, uid, accessToken} = result;
      dispatch(
        login({
          displayName: displayName ?? '',
          email: email ?? '',
          photoURL: photoURL ?? '',
          uid: uid ?? '',
          accessToken: accessToken ?? ''
        }),
      );

      if (accessToken) {
        const calendarResult = await fetchCalendarEvents(accessToken);
        console.log(calendarResult);
        if (calendarResult.ok) {
          dispatch(setCalendarEvents(calendarResult.events));
        }
      }
    }
  };
};
