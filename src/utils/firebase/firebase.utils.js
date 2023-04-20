// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCMQ5NDKqNF9cM_RkerXw59tsxNenXWTvE',
  authDomain: 'crwn-db-dd2b3.firebaseapp.com',
  projectId: 'crwn-db-dd2b3',
  storageBucket: 'crwn-db-dd2b3.appspot.com',
  messagingSenderId: '388785047903',
  appId: '1:388785047903:web:7ebe31c59a7f5e8c8c4eea',
  measurementId: 'G-77RGDB7GDJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// Firestore
const db = getFirestore();

export const auth = getAuth();
export const SignInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce(
    (acc, docSnapShot) => {
      const { title, items } = docSnapShot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    },

    {}
  );

  return categoryMap;
};

export const createUserFromAuth = async (user, additionalInfo = {}) => {
  if (!user) return;
  const userRef = doc(db, 'user', user.uid);

  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (err) {
      console.log('error creating the user', err.message);
    }
  }

  return userRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
