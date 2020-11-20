import firebase from 'firebase/app';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const storeRegistration = async (registration) => {
  const ref = firestore.doc(`registrations/${registration.id}`);  
  const {email, name} = registration;

  try {
    await ref.set({
      email,
      name
    })
  } catch (error) {
    console.log('firebase error', error.message)
  }

  return ref;
};