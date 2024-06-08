import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from './firebase';
import { Graduate } from '../types';

export const fetchGraduates = async (): Promise<Graduate[]> => {
  console.log('fetching graduates');
  const graduatesCollection = collection(db, 'graduates');
  const graduatesSnapshot = await getDocs(graduatesCollection);
  const graduatesList = graduatesSnapshot.docs.map(doc => doc.data() as Graduate);
  return graduatesList;
};

export const fetchGraduateById = async (id: string): Promise<Graduate | null> => {
  const graduatesCollection = collection(db, 'graduates');
  const q = query(graduatesCollection, where('id', '==', id));
  console.log(id);
  const graduatesSnapshot = await getDocs(q);

  if (graduatesSnapshot.empty) {
    return null;
  }

  const graduateDoc = graduatesSnapshot.docs[0];
  return graduateDoc.data() as Graduate;
};


// Some queries may be helpful in the future
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
