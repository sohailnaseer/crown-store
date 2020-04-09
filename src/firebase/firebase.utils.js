import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBe7F_poafhlnW8iHXvC3qbawRSxi4pbrM',
  authDomain: 'crown-store-61b33.firebaseapp.com',
  databaseURL: 'https://crown-store-61b33.firebaseio.com',
  projectId: 'crown-store-61b33',
  storageBucket: 'crown-store-61b33.appspot.com',
  messagingSenderId: '1018818328179',
  appId: '1:1018818328179:web:cdfc5bded50801a2f55c06',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfile = async (authUser, additionalData) => {
  const userRef = firestore.doc(`users/${authUser.uid}`);
  const snapShop = await userRef.get();

  if (!snapShop.exists) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Some Error Occcurred', error.message);
    }
  }
  return userRef;
};

export default firebase;
