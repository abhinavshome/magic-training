booksCart.service('localData', function() {

    this.set = function (key, data) {
    	localStorage.setItem(key, JSON.stringify(data) || []);
    };

    this.get = function (key) {
    	return JSON.parse(localStorage.getItem(key) || '[]');
    };
})
