import actionTypes from './shop.types';

const initialState = {
  collections: null,
  isFetching: true,
  errorMessage: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case actionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
        errorMessage: null,
      };
    case actionTypes.FETCH_COLLECTIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        collections: null,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
