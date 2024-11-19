import { CartItem } from "../carrito.interface";


export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: []
};
