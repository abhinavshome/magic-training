//closures
function outer() {
    var n1 = 2;

    function inner() {
        n1++;
        console.log(n1);
    }

    return inner;
}


var i = outer();
i();
i();

//module pattern
var counter = (function() {
    var count = 0;

    return {
        increment: function() {
            count++;
        },
        show: function() {
            console.log('counter->', count);
        }
    };
})();

counter.increment();
counter.increment();
counter.show();

//private members of class
function Person(name) {
    var age = 30;
    this.name = name;
    this.getAge = function() {
        return age;
    }
}

var p = new Person('abhinav');
console.log(p.name);
console.log(p.getAge());

// side effects
var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick =
        (function(j) {
            return function() {
                console.log('button ' + j + ' was clicked');
            }
        })(i)
}









