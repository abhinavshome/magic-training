console.log('hello');
function Car() {
	//properties
	this.wheels = 4;
	this.steering = 1;
	this.speed = 10;

	//behaviours
	this.move = function () {
		console.log('moving...');
	}

	this.accelarate = function () {
		this.speed += 10;
	}
}