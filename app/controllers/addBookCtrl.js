booksCart.controller('addBookCtrl', function($scope, bookService, $location, $http) {

    $scope.books = bookService.getBooks();
    $scope.addBook = function() {
        // console.log($scope.addBookForm.$valid);
        // if($scope.addBookForm.$invalid)
        // 	return false;

        bookService
            .addBook($scope.newBook)
            .then(function(response) {
                console.log(response);
                $location.path('/');
            })
    }
});
