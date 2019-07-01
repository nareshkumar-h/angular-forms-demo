import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-demo';

  productName:string;
  price:number;

  save(){
    console.log('Save Product - ProductName:' , this.productName  +",price:" + this.price );
    alert('Save Product - ' + this.productName + "," + this.price);
  }
}
