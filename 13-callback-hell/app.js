//dummy implementation

fetchPhoneNumber(function (phoneNumber) {
	doTableBooking(phoneNumber, function (bookingId) {
		orderFood(bookingId, 'Chhole Bhature', function (orderId) {
			sendSMS(orderId);
		})
	})
});

function fetchPhoneNumber(cb) {
	setTimeout(function () {
		var phoneNumber = '11111';
		console.log('i have phone number now', phoneNumber);
		cb(phoneNumber);
	}, 2000)
}

function doTableBooking(phoneNumber, cb) {
	setTimeout(function () {
		var bookingId = '1234';
		console.log('i have the booking id', bookingId);
		cb(bookingId);
	}, 2000)
}

function orderFood(orderId, food, cb) {
	setTimeout(function () {
		var orderId = 'xyz123';
		console.log('i have the orderId', orderId);
		cb(orderId);
	}, 2000)
}
function sendSMS(orderId) {
	console.log('i am sending orderId', orderId);
}




