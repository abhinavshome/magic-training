//Program 1
function sayHi() {
	console.log('hi');
}

function sayBye() {
	console.log('bye');
}

setTimeout(sayHi, 3000);
setTimeout(sayBye, 2000);

console.log('Hello World');

//Program 2
fetchFromDb(function(users) {
    processUsers(users);
})

doSomeThingElse();


function fetchFromDb(cb) {
	setTimeout(function () {
		var users = ['Ram', 'Shyam', 'Mohan'];
		cb(users);
	}, 2000)
}

function processUsers(users) {
	console.log('processing users', users.join(', '));
}

function doSomeThingElse() {
	console.log('doing sth else');
}


