import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';



const googleProvider = new GoogleAuthProvider();
// Agregar el scope de Calendar al proveedor
googleProvider.addScope('https://www.googleapis.com/auth/calendar.readonly');

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;

    // Obtener el access token para Calendar
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;

    let calendarEvents = [];
    
    if (accessToken) {
      try {
        const response = await fetch(
          'https://www.googleapis.com/calendar/v3/calendars/primary/events',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          calendarEvents = data.items || [];
        }
      } catch (calendarError) {
        console.warn('Error fetching calendar events:', calendarError);
        // No fallamos el login si hay error en calendar
      }
    }

    return {
      ok: true,
      // User info
      displayName,
      email,
      photoURL,
      uid,
      // Calendar events
      calendarEvents,  };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
  
      return {
        ok: false,
        errorMessage,
      };
    }
  };
  
  export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
  };
  