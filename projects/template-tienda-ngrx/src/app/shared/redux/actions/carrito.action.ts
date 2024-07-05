import { createAction } from '@ngrx/store'

export const addToCart = createAction('[Cart] AddItem');

export const removeFromCart = createAction('[Cart] RemoveItem');
