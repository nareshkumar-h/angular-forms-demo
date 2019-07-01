import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-form1',
  templateUrl: './add-product-form1.component.html',
  styleUrls: ['./add-product-form1.component.css']
})
export class AddProductForm1Component implements OnInit {
  
  productName:string;
  price:number;

  constructor() { }

  ngOnInit() {
  }


  save(){
    console.log('Save Product - ProductName:' , this.productName  +",price:" + this.price );
    alert('Save Product - ' + this.productName + "," + this.price);
  }
}
