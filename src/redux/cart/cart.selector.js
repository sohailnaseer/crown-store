import { createSelector } from 'reselect';

const cartSelect = (state) => state.cart;

export const selectCartItems = createSelector(
  [cartSelect],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [cartSelect],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector([cartSelect], (cart) =>
  cart.cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartTotal = createSelector([cartSelect], (cart) =>
  cart.cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
