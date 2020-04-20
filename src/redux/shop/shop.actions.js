import actionTypes from './shop.types';
import { firestore, mapCollectionData } from '../../firebase/firebase.utils';

export const updateCollections = (collections) => {
  return {
    type: actionTypes.UPDATE_COLLECTIONS,
    payload: collections,
  };
};

export const fetchCollectionsAsync = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.FETCH_COLLECTIONS_START,
    });

    const collectionRef = firestore.collection('collections');
    collectionRef
      .get()
      .then((snapshot) => {
        const data = mapCollectionData(snapshot);
        dispatch({
          type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: actionTypes.FETCH_COLLECTIONS_ERROR,
          payload: err.message,
        })
      );
  };
};
