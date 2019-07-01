import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-add-product-form3',
  templateUrl: './add-product-form3.component.html',
  styleUrls: ['./add-product-form3.component.css']
})
export class AddProductForm3Component implements OnInit {

  product: Product;

  constructor() { 
    this.product = new Product();
  }

  ngOnInit() {
  }


  save(){
    console.log('Save Product - ProductName:' , this.product );
    alert('Save Product - ' + JSON.stringify(this.product) );
  }

}
