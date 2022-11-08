var value = "10";
testA();
function testA() {
    return 10;
}
testA();
//letB();
var letB = function (a, x) {
    if (x === void 0) { x = 12; }
    var xx = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        xx[_i - 2] = arguments[_i];
    }
    var b = 15;
    var value = 15;
    console.log("a: " + a);
    console.log("b: " + b);
    console.log("x: " + x);
    console.log(value);
    console.log(this.value);
    for (var index = 0; index < xx.length; index++) {
        var element = xx[index];
        console.log(element);
    }
};
letB(10, 20, 30, 40, 50);
function letC(val) {
    console.log(val);
}
letC(function () { console.log("called"); });
