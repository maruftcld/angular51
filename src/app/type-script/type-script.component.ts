import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-script',
  templateUrl: './type-script.component.html',
  styleUrls: ['./type-script.component.css']
})
export class TypeScriptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

function letC(val, val2){
  console.log(val2());
}

let letD = function(){
  console.log("function D");
}

letC(
  function(){console.log("called"); return 10;}, letD
);
