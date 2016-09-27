function Car() {
    //properties
    this.wheels = 4;
    this.steering = 1;
    this.speed = 10;

}

//behaviours
Car.prototype.move = function() {
    console.log('moving...');
};

Car.prototype.accelarate = function() {
    this.speed += 10;
};

Car.prototype.showSpeed = function() {
    console.log('------');
    console.log(this.speed + ' kmph');
    console.log('-------');
}
