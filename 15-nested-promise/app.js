//chaining promises using jquery


// function add(n1, n2) {
//     var sum = n1 + n2;
//     return {
//         half: function() {
//             return sum / 2;
//         }
//     }
// }

// var result = add(3, 4).half();
// console.log(result);


fetchPhoneNumber()
    .then(function(phoneNumber) {
        return doTableBooking(phoneNumber);
    })
    .then(function(bookingId) {
        return orderFood(bookingId, 'Chhole');
    })
    .then(function(orderId) {
        sendSMS(orderId)
    })

function fetchPhoneNumber() {
    var defer = $.Deferred();
    setTimeout(function() {
        var phoneNumber = '11111';
        console.log('i have phone number now', phoneNumber);
        defer.resolve(phoneNumber);
    }, 2000);
    return defer.promise();
}

function doTableBooking(phoneNumber, cb) {
    var defer = $.Deferred();
    setTimeout(function() {
        var bookingId = '1234';
        console.log('i have the booking id', bookingId);
        defer.resolve(bookingId);
    }, 2000);
    return defer.promise();
}

function orderFood(orderId, food, cb) {
    var defer = $.Deferred();
    setTimeout(function() {
        var orderId = 'xyz123';
        console.log('i have the orderId', orderId);
        defer.resolve(orderId);
    }, 2000);
    return defer.promise();
}

function sendSMS(orderId) {
    //var defer = $.Deferred();
    console.log('i am sending orderId', orderId);
    //defer.resolve(orderId);
    //return defer.promise();
}
