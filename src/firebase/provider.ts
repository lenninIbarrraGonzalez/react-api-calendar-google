import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';



const googleProvider = new GoogleAuthProvider();
// Agregar el scope de Calendar al proveedor
googleProvider.addScope('https://www.googleapis.com/auth/calendar.readonly');

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;

    // Obtener el access token para usos posteriores
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
      accessToken // Guardamos el token para usar después
    };
  } catch (error: any) {
    return {
      ok: false,
      errorMessage: error.message
    };
  }
};

// calendar.js - Manejo específico del calendario
export const fetchCalendarEvents = async (accessToken: string) => {
  try {
    const response = await fetch(
      'https://www.googleapis.com/calendar/v3/calendars/primary/events',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Error fetching calendar events');
    }

    const data = await response.json();
    return {
      ok: true,
      events: data.items || []
    };
  } catch (error: any) {
    return {
      ok: false,
      errorMessage: error.message
    };
  }
};
  
export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
  