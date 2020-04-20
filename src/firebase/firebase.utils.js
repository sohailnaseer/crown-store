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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createShopCollection = async (collectionKey, objectToadd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectToadd.forEach((obj) => {
    const newRef = collectionRef.doc();
    batch.set(newRef, obj);
  });
  await batch.commit();
};

export const mapCollectionData = (snapshotObject) => {
  const transformedCollection = snapshotObject.docs.map((obj) => {
    const { title, items } = obj.data();

    return {
      id: obj.id,
      title,
      items,
    };
  });
  const result = transformedCollection.reduce((acc, obj) => {
    acc[obj.title.toLowerCase()] = obj;
    return acc;
  }, {});

  return result;
};

export default firebase;
