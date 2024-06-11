import { collection, doc, getDocs, updateDoc, query, where, orderBy, limit } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from './config';
import { Graduate, FirestoreData } from '../types';

export const fetchGraduates = async (): Promise<Graduate[]> => {
  const graduatesCollection = collection(db, 'codeworks_bootcamp');
  const graduatesSnapshot = await getDocs(graduatesCollection);
  const graduatesList = graduatesSnapshot.docs.map(doc => doc.data() as Graduate);
  return graduatesList;
};

export const fetchGraduateById = async (id: string): Promise<Graduate | null> => {
  const graduatesCollection = collection(db, 'codeworks_bootcamp');
  const q = query(graduatesCollection, where('_id', '==', id));
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
  const graduatesCollection = collection(db, 'codeworks_bootcamp');
  const graduatesQuery = query(graduatesCollection, orderBy('_id', 'desc'), limit(5));
  const graduatesSnapshot = await getDocs(graduatesQuery);
  const graduatesList = graduatesSnapshot.docs.map(doc => ({ _id: doc.id, ...doc.data() } as Graduate));
  return graduatesList;
};

export const updateFirebaseDoc = async (docId: string, formData: FirestoreData) => {
  try {
    const docRef = doc(db, "codeworks_bootcamp", docId);
    await updateDoc(docRef, formData);
    console.log("Document updated with ID: ", docId);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export const uploadFile = async (file: File, path: string) => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};
