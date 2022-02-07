import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
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
    return addDoc(userCollectionRef, user);
  };

  getAllUsersByScore = () => {
    const q = query(userCollectionRef, orderBy('score'));
    return getDocs(q);
  };

  getSolutions = () => {
    return getDocs(solutionCollectionRef);
  };
}

export default new FirebaseService();
