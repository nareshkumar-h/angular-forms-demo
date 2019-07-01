import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-form2',
  templateUrl: './add-product-form2.component.html',
  styleUrls: ['./add-product-form2.component.css']
})
export class AddProductForm2Component implements OnInit {

  product = { "productName" : "", price:""};

  constructor() { }

  ngOnInit() {
  }


  save(){
    console.log('Save Product - ProductName:' , this.product );
    alert('Save Product - ' + JSON.stringify(this.product) );
  }


}
