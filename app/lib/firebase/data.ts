import { collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { db } from './config';
import { Graduate } from '../types';

export const fetchGraduates = async (): Promise<Graduate[]> => {
  const graduatesCollection = collection(db, 'codeworks_graduates');
  const graduatesSnapshot = await getDocs(graduatesCollection);
  const graduatesList = graduatesSnapshot.docs.map(doc => doc.data() as Graduate);
  return graduatesList;
};

export const fetchGraduateById = async (id: string): Promise<Graduate | null> => {
  const graduatesCollection = collection(db, 'codeworks_graduates');
  const q = query(graduatesCollection, where('id', '==', id));
  const graduatesSnapshot = await getDocs(q);

  if (graduatesSnapshot.empty) {
    return null;
  }

  const graduateDoc = graduatesSnapshot.docs[0];
  return graduateDoc.data() as Graduate;
};

export const fetchGraduatesStatistics = async () => {
  const graduates = await fetchGraduates();

  const totalGraduates = graduates.length;
  const totalAvailable = graduates.filter(grad => grad.availability === 'Available').length;
  const totalNotAvailable = graduates.filter(grad => grad.availability === 'Not Available').length;
  const totalFreelancing = graduates.filter(grad => grad.availability === 'Freelancing').length;

  return {
    totalGraduates,
    totalAvailable,
    totalNotAvailable,
    totalFreelancing,
  };
};

export const fetchLatestGraduates = async (): Promise<Graduate[]> => {
  const graduatesCollection = collection(db, 'codeworks_graduates');
  const graduatesQuery = query(graduatesCollection, orderBy('id', 'desc'), limit(5));
  const graduatesSnapshot = await getDocs(graduatesQuery);
  const graduatesList = graduatesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Graduate));
  return graduatesList;
};
