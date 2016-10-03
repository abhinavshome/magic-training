// booksCart.factory('bookService', function (localData) {

//  var api = {};

//     api.getBooks = function () {
//      return localData.get('books');
//     };

//     api.addBook = function (book) {
//      var books = localData.get('books');
//      books.push(book);
//      localData.set('books', books);
//     };

//     return api;
// });

booksCart.factory('bookService', function($http) {
    var api = {},
        url = 'http://localhost:4000/book';

    api.getBooks = function() {
        return $http.get(url);
    };

    api.addBook = function(book) {
        return $http.post(url, book);
    };

    return api;
});
