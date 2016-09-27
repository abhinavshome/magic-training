var calc = (function() {
    var x = 3;

    return {
        add: function(n1, n2) {
            return n1 + n2
        },
        mul: function(n1, n2) {
            return n1 * n2
        }
    }
})();

var car = (function() {
    var wheels = 4,
        speed = 10;

     return {
     	accelarate: function () {
     		speed+= 10;
     	},
     	move: function () {
     		console.log('moving');
     	},
     	showSpeedoMeter: function () {
     		console.log('SPEED:: '+speed+'KMPH');
     	}
     }
})();

car.move();
car.showSpeedoMeter();
car.accelarate();
car.showSpeedoMeter();