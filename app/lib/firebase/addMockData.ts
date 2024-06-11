import { db } from './config'; // Corrected import path
import { codeworks_graduates } from './mockData'; // Corrected import path
import { collection, doc, setDoc } from 'firebase/firestore'; // Ensure correct Firestore functions are imported

// Use npx tsx addMockData.ts to add mockdata to firebase 
const addMockData = async () => {
  try {
    for (const graduate of codeworks_graduates) {
      const graduateRef = doc(collection(db, 'codeworks_bootcamp'));
      const _id = graduateRef.id; // Get the generated document ID
      const graduateWithUID = { ...graduate, _id }; // Add the UID to the graduate object

      await setDoc(graduateRef, graduateWithUID);
    }
    console.log('Mock data added to Firestore');
  } catch (error) {
    console.error('Error adding mock data: ', error);
  }
};

addMockData();
