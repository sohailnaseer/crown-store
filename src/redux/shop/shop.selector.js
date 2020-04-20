import { createSelector } from 'reselect';

const shopSelect = (state) => state.shop;

export const selectCollections = createSelector(
  [shopSelect],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [shopSelect],
  (shop) => Object.keys(shop.collections).map((key) => shop.collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([shopSelect], (shop) => shop.collections[collectionUrlParam]);

export const selectIsFetching = createSelector([shopSelect], (shop) => {
  return shop.isFetching;
});

export const selectIsCollectionLoaded = createSelector(
  [shopSelect],
  (shop) => !!shop.collections
);
