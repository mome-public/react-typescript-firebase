import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/remote-config';
import 'firebase/functions';

// For debug
// console.log(`apiKey: ${process.env.REACT_APP_API_KEY ?? ''}`);
// console.log(`authDomain: ${process.env.REACT_APP_AUTH_DOMAIN ?? ''}`);
// console.log(`databaseURL: ${process.env.REACT_APP_DATABALSE_URL ?? ''}`);
// console.log(`projectId: ${process.env.REACT_APP_PROJECT_ID ?? ''}`);
// console.log(`storageBucket: ${process.env.REACT_APP_STORAGE_BUCKET ?? ''}`);
// console.log(
//   `messagingSenderId: ${process.env.REACT_APP_MESSAGING_SENDER_ID ?? ''}`,
// );
// console.log(`appId: ${process.env.REACT_APP_APP_ID ?? ''}`);

if (!firebase.apps.length) {
  // Initialize firebase App
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABALSE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  });
}

export default firebase;
