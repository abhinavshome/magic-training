//variable hoisting
console.log(x+4);

var x=3;

//another ex
y = 3;
console.log(y*2);
var y;

//function hoisting
add(2,3);

function add(n1, n2) {
    console.log(n1+n2);
}

//expressions
mul(2,4);

var mul = function (n1, n2) {
    console.log(n1*n2);
};

//another ex
//expressions
mul1(2,4);

var mul1 = function multiply(n1, n2) {
    console.log(n1*n2);
};















    
