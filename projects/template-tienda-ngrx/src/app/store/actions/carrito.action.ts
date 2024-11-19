import { createAction, props } from '@ngrx/store';
import { CartItem } from '../carrito.interface';


export const addItem = createAction(
  '[Cart] Add Item',
  props<{ item: CartItem }>()
);

export const removeItem = createAction(
  '[Cart] Remove Item',
  props<{ itemId: string }>()
);

export const clearCart = createAction('[Cart] Clear Cart');
