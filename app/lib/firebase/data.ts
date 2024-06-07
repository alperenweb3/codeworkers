import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';
import { Graduate } from '../types';

export const fetchGraduates = async (): Promise<Graduate[]> => {
  const graduatesCollection = collection(db, 'graduates');
  const graduatesSnapshot = await getDocs(graduatesCollection);
  const graduatesList = graduatesSnapshot.docs.map(doc => doc.data() as Graduate);
  return graduatesList;
};
