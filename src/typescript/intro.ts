let value :string = "10";

testA();
function testA(){
    return 10;
}
testA();

//letB();
let letB = function(a:number, x:number = 12, ...xx){
    let b  :number = 15;
    let value  :number = 15;
    console.log("a: " + a);
    console.log("b: " + b);
    console.log("x: " + x);
    console.log(value);
    console.log(this.value);
    for (let index = 0; index < xx.length; index++) {
        const element = xx[index];
        console.log(element);
    }
}
letB(10, 20, 30, 40, 50);

