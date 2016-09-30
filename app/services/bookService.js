booksCart.service('bookService', function (localData) {
    this.getBooks = function () {
    	return localData.get('books');
    };

    this.addBook = function (book) {
    	var books = localData.get('books');
    	books.push(book);
    	localData.save('books', books);
    };
})