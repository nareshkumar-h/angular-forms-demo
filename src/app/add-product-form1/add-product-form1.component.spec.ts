import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductForm1Component } from './add-product-form1.component';

describe('AddProductForm1Component', () => {
  let component: AddProductForm1Component;
  let fixture: ComponentFixture<AddProductForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
