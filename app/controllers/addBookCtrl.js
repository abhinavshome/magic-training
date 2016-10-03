booksCart.controller('addBookCtrl', function($scope, bookService, $location, $q) {
	console.log(typeof $q);
    $scope.books = bookService.getBooks();
    $scope.addBook = function() {
        // console.log($scope.addBookForm.$valid);
        // if($scope.addBookForm.$invalid)
        // 	return false;
        bookService.addBook($scope.newBook)
        $location.path('/')
    }
});
