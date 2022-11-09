import { Component } from '@angular/core';
import { Trainee } from 'src/model/Trainee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  save(data :Trainee){
    console.log(data);
  }

  
  twoWayData = "";
  sendValue(temp){
    console.log(temp.value);
  }

  getVal(){
    return "pen";
  }

  constructor(){
    
  }

  name : string = "Mr. X"; //string interpolation
  titlevalue = "I am Hello World"; //attribute binding
  colorvalue = "green"; //style binding
  classvalue = "my-color"; //class binding
  

  getName() : string {
    return "Hello Angular";
  }

  status = false;

  getProduct(){
    return "Pen";
  }

  colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'teal'];
  products = ['car', 'cycle', 'soap', 'ball', 'remote', 'book', 'mouse', 'mobile'];


  something = "";
  doSomething(){
    this.something = "I am something";
    //alert("done");
  }
}
