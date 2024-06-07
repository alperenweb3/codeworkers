import { db } from './firebase'; // Corrected import path
import { graduates } from './mockData'; // Corrected import path
import { collection, doc, setDoc } from 'firebase/firestore'; // Ensure correct Firestore functions are imported

const addMockData = async () => {
  try {
    for (const graduate of graduates) {
      const graduateRef = doc(collection(db, 'graduates'), graduate.id);
      await setDoc(graduateRef, graduate);
    }
    console.log('Mock data added to Firestore');
  } catch (error) {
    console.error('Error adding mock data: ', error);
  }
};

addMockData();
