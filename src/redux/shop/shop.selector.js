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
