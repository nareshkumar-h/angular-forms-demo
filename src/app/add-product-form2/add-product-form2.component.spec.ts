import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductForm2Component } from './add-product-form2.component';

describe('AddProductForm2Component', () => {
  let component: AddProductForm2Component;
  let fixture: ComponentFixture<AddProductForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
