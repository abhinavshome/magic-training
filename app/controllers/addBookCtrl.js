booksCart.controller('addBookCtrl', function($scope, bookService, $location) {
    $scope.books = bookService.getBooks();
    $scope.addBook = function() {
        //$scope.books.unshift(angular.copy($scope.newBook));
        bookService.addBook($scope.newBook)
        $location.path('/')
    }
});
