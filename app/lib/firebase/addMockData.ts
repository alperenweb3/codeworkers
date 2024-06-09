import { db } from './config'; // Corrected import path
import { codeworks_graduates } from './mockData'; // Corrected import path
import { collection, doc, setDoc } from 'firebase/firestore'; // Ensure correct Firestore functions are imported

// Use  npx tsx addMockData.ts to add mockdata to firebase 
const addMockData = async () => {
  try {
    for (const graduate of codeworks_graduates) {
      const graduateRef = doc(collection(db, 'codeworks_graduates'), graduate.id);
      await setDoc(graduateRef, graduate);
    }
    console.log('Mock data added to Firestore');
  } catch (error) {
    console.error('Error adding mock data: ', error);
  }
};

addMockData();
