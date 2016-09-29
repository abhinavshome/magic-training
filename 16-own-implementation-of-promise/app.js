function Promise() {
    var successCallback, errorCallback, status = 'pending';

    this.then = function (cb1, cb2) {
        successCallback = cb1;
        errorCallback = cb2;
    };

    this.resolve = function (data) {
        successCallback(data);
    };

    this.reject = function (data) {
        errorCallback(data)
    }
}

function fetchFood() {
    var p = new Promise();
    var menu = ['biryani', 'dosa'];
    setTimeout(function() {
        var menuItem = Math.floor(Math.random() * 3)
        if (menuItem == 2)
            p.reject('not interested');
        else
            p.resolve(menu[menuItem]);
    }, 2000);
    return p;
}

var promise = fetchFood();

promise.then(function(foodItem) {
    if (foodItem == 'dosa')
        console.log('throwing it, dont like it');
    else if (foodItem == 'boryani')
        console.log('wow! gonna eat now!');

}, function(reason) {
    console.log('he ditched me because of ', reason);
});




