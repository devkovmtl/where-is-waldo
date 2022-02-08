import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '../firebase';

const userCollectionRef = collection(db, 'users');
const solutionCollectionRef = collection(db, 'solution');

type User = {
  username: string;
  score: number;
  level: number;
};

class FirebaseService {
  addUser = (user: User) => {
    if (!user.username || !user.score) {
      return;
    }
    console.log('FIREBASE CALL ADD USER');
    return addDoc(userCollectionRef, user);
  };

  getAllUsersByScore = () => {
    const q = query(userCollectionRef, orderBy('score'));
    console.log('FIREBASE CALL GET ALL USERS BY SCORE');
    return getDocs(q);
  };

  getSolutions = () => {
    console.log('FIREBASE CALL GET SOLUTION');
    return getDocs(solutionCollectionRef);
  };
}

export default new FirebaseService();
