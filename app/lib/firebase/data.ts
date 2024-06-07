import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from './firebase';
import { Graduate } from '../types';

export const fetchGraduates = async (): Promise<Graduate[]> => {
  const graduatesCollection = collection(db, 'graduates');
  const graduatesSnapshot = await getDocs(graduatesCollection);
  const graduatesList = graduatesSnapshot.docs.map(doc => doc.data() as Graduate);
  return graduatesList;
};

export const fetchGraduateYear = async (): Promise<Graduate[]> => {
  const graduatesCollection = collection(db, 'graduates');
    // Create a query against the collection
    const q = query(graduatesCollection, where('graduationYear', '==', 2023));
  const graduatesSnapshot = await getDocs(q);
  const graduatesList = graduatesSnapshot.docs.map(doc => doc.data() as Graduate);
  return graduatesList;
};

export const fetchGraduateLocation = async (): Promise<Graduate[]> => {
  const graduatesCollection = collection(db, 'graduates');
    // Create a query against the collection
    const q = query(graduatesCollection, where('location', '==', 'San Francisco, CA'));
  const graduatesSnapshot = await getDocs(q);
  const graduatesList = graduatesSnapshot.docs.map(doc => doc.data() as Graduate);
  return graduatesList;
};
export const fetchGraduateAvailability = async (): Promise<Graduate[]> => {
  const graduatesCollection = collection(db, 'graduates');
    // Create a query against the collection
    const q = query(graduatesCollection, where('availability', '==', 'Freelancing'));
  const graduatesSnapshot = await getDocs(q);
  const graduatesList = graduatesSnapshot.docs.map(doc => doc.data() as Graduate);
  return graduatesList;
};
