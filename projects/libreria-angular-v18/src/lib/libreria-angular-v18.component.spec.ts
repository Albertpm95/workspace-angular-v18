import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaAngularV18Component } from './libreria-angular-v18.component';

describe('LibreriaAngularV18Component', () => {
  let component: LibreriaAngularV18Component;
  let fixture: ComponentFixture<LibreriaAngularV18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibreriaAngularV18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibreriaAngularV18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
