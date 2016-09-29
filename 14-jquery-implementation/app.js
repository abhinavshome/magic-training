// fetchPhoneNumber()
//     .then(function(phoneNumber) {
//         doTableBooking(phoneNumber);
//     })
//     .then(function(bookingId) {
//         orderFood(bookingId, 'Chhole');
//     })
//     .then(function(orderId) {
//         sendSMS(orderId)
//     })


function fetchFood() {
    var defer = $.Deferred();
    var menu = ['biryani', 'dosa'];
    setTimeout(function() {
        var menuItem = Math.floor(Math.random() * 3)
        if (menuItem == 2)
            defer.reject('not interested');
        else
            defer.resolve(menu[menuItem]);
    }, 2000);
    return defer.promise();
}

var promise = fetchFood();

promise.then(function(foodItem) {
    if (foodItem == 'dosa')
        console.log('throwing it, dont like it');
    else if (foodItem == 'boryani')
        console.log('wow! gonna eat now!');

}, function(reason) {
    console.log('he ditched me because of ', reason);
})
