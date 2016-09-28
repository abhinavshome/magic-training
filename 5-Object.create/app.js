var car = {
	wheels: 4,
	move: function () {
		console.log('moving..');
	}
}

Object.create = function (o) {
	var f = function () {};
	f.prototype = o;
	return new f();
}

var bigCar = Object.create(car);

bigCar.openAirBags = function () {
	console.log('opening air bags');
}

bigCar.openAirBags();
bigCar.move();
