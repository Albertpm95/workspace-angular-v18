import { TestBed } from '@angular/core/testing';

import { LibreriaAngularV18Service } from './libreria-angular-v18.service';

describe('LibreriaAngularV18Service', () => {
  let service: LibreriaAngularV18Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibreriaAngularV18Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
