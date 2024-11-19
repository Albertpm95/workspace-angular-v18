import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from '../reducers/carrito.state';


export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.items
);

export const selectCartTotal = createSelector(
  selectCartItems,
  items => items.reduce((total, item) => total + item.price * item.quantity, 0)
);