import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDWHSjNn8aZW6LHA28Fq3VCUQHbJdBtyDw',
    authDomain: 'abhisheksagarp-8533d.firebaseapp.com',
    projectId: 'abhisheksagarp-8533d',
    storageBucket: 'abhisheksagarp-8533d.appspot.com',
    messagingSenderId: '225136821204',
    appId: '1:225136821204:web:1d4126fcbc9260a37acc41',
    measurementId: 'G-8R5ECH0S6D',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const updateCustomer = async (id, age) => {
//     const userDoc = doc(db, 'customers', id);
//     const newFields = { age: age + 1 };
//     await updateDoc(userDoc, newFields);
// };

// const deleteCustomer = async (id) => {
//     const userDoc = doc(db, 'customers', id);
//     await deleteDoc(userDoc);
// };

// useEffect(() => {
//     const getCustomers = async () => {
//         const data = await getDocs(customersCollRef);
//         setCustomers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };
//     getCustomers();
// }, []);
