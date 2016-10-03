booksCart.factory('bookService', function (localData) {
    
	var api = {};

    api.getBooks = function () {
    	return localData.get('books');
    };

    api.addBook = function (book) {
    	var books = localData.get('books');
    	books.push(book);
    	localData.set('books', books);
    };

    return api;
});

