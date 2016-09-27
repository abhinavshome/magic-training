var things = [2,3,5];

Array.prototype.sum = function () {
	var sum = 0;
	this.forEach(function (e) {
		sum += e;
	});
	return sum;
}

console.log(things.sum());