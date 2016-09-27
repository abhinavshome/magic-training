function Car() {
	this.wheels = 4;
	this.speed = 10;

	this.move = function () {
		console.log('moving..');
	}

	this.accelarate = function () {
		this.speed += 10;
	}
}

function BigCar() {
	this.tax = '10%';
	this.openAirBags = function () {
		console.log('opening air bags..');
	}
}

BigCar.prototype = new Car();

var myCar = new Car();
console.log(myCar.speed);
myCar.accelarate();
console.log(myCar.speed);

var myBigCar = new BigCar();
myBigCar.move()
myBigCar.openAirBags();

