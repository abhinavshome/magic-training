booksCart.filter('titlecase', function () {
	return function (input) {
		var words = (input || '').split(' ');
		var words = words.map(function (word) {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); 
		});

		return words.join(' ');
	}
})