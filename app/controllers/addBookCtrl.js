booksCart.controller('addBookCtrl', function($scope, bookService, $location) {
    $scope.books = bookService.books;
    $scope.addBook = function() {
        //$scope.books.unshift(angular.copy($scope.newBook));
        $scope.books.unshift($scope.newBook);
        $location.path('/')
    }
});
