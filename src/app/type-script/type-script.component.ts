import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-script',
  template: "<h1>Normal</h1>",
  styleUrls: ['./type-script.component.css']
})
export class TypeScriptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

function letC(val, val2){
  console.log(val2());
    function letE(){
      return 123;
    }
  return letE();
}

let letD = function(){
  console.log("function D");
  return "I am letD";
}

console.log(letC(function(){console.log("called"); return 10;}, letD));
let xd :number = 121;
console.log(`hello ${letD()}`);




