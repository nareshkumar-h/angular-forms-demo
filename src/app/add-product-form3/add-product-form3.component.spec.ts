import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductForm3Component } from './add-product-form3.component';

describe('AddProductForm3Component', () => {
  let component: AddProductForm3Component;
  let fixture: ComponentFixture<AddProductForm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductForm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
