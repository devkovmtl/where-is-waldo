import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: '<APIKEY>',
  authDomain: '<APIKEY>',
  projectId: '<APIKEY>',
  storageBucket: '<APIKEY>',
  messagingSenderId: '<APIKEY>',
  appId: '<APIKEY>',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
