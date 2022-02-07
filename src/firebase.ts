import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCGBqcjAtw56ZL1NQijGBr5_uLhlxOHJiA',
  authDomain: 'where-s-waldo-c516e.firebaseapp.com',
  projectId: 'where-s-waldo-c516e',
  storageBucket: 'where-s-waldo-c516e.appspot.com',
  messagingSenderId: '548163644124',
  appId: '1:548163644124:web:7d3622c95c2d027e172219',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
