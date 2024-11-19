import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { addItem } from './store/actions/carrito.action';
import { CartItem } from './store/carrito.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet>`,
})
export class AppComponent {
  title = 'template-tienda-ngrx';
  item: CartItem = {id: '1', name: 'Name ', price: 1, quantity: 5}

  constructor(private store: Store) {
    
  }

  ngOninit() {
    console.log('Añadiendo item al store', this.store)
    this.store.dispatch(addItem( {item: this.item} ));
  }

}
