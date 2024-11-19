import { createReducer, on } from "@ngrx/store";
import { addItem, clearCart, removeItem } from "../actions/carrito.action";
import { initialState } from "./carrito.state";


export const cartReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => ({
    ...state,
    items: [...state.items, item]
  })),
  on(removeItem, (state, { itemId }) => ({
    ...state,
    items: state.items.filter(item => item.id !== itemId)
  })),
  on(clearCart, state => ({
    ...state,
    items: []
  }))
);
