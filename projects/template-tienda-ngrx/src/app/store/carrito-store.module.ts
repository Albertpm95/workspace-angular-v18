import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './reducers/carrito.reducer';


@NgModule({
  imports: [
    StoreModule.forFeature('cart', cartReducer)
  ]
})
export class CartStoreModule {}
