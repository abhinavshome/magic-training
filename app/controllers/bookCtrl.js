booksCart.controller('bookCtrl', function($scope, bookService) {
    // $scope.message = 'hello world';
    $scope.cart = {
        totalPrice: 0,
        items: []
    };

    // $scope.showMessage = function () {
    //     console.log(lowecaseFilter($scope.message));
    // }

    $scope.books = bookService.getBooks();


    $scope.rateUp = function(book) {
        book.rating < 5 && book.rating++
    };

    $scope.rateDown = function(book) {
        book.rating > 1 && book.rating--;
    };

    $scope.addToCart = function(book) {
        var item = findInCart(book.title);
        if (!item) {
            item = {
                title: book.title,
                qty: 1,
                price: book.price
            };
            $scope.cart.items.push(item);
        } else {
            item.qty++;
        }
        $scope.cart.totalPrice += book.price;
    };

    $scope.highRated = function (book) {
        return book.rating > 2;
    };

    $scope.costly = function (book) {
        return book.price > 30;
    };

    $scope.all = function (book) {
        return true;
    };

    function findInCart(title) {
        var foundItems = $scope.cart.items.filter(function(item) {
            return item.title == title;
        });
        return foundItems[0];
    }
})
