import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddProductForm1Component } from './add-product-form1/add-product-form1.component';
import { AddProductForm2Component } from './add-product-form2/add-product-form2.component';
import { AddProductForm3Component } from './add-product-form3/add-product-form3.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductForm1Component,
    AddProductForm2Component,
    AddProductForm3Component
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
