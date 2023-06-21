import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {

  presentDate = new Date();
  price : number = 5000;
  jsonData={userId:10011,name:{username:"Eric"}}

  decimalNumber1: number=8.5432215;
  decimalNumber2: number=5.45;
  decimalNumber3: number=0.85673;
  num :number = 888;

  Fruits=["Apple", "Orange","Grape","Mango","Kiwi"];


}
