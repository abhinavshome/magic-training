var booksCart = angular.module('booksCart', ['ngRoute']);

booksCart.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'bookCtrl'
        })
        .when('/add-book', {
            templateUrl: 'add-book.html',
            controller: 'addBookCtrl'
        })
        .when('/about', {
            template: '<h1>About</h1>'
        })
        .otherwise({
            redirectTo: '/about'
        });
});

booksCart.controller('bookCtrl', function($scope) {
    // $scope.message = 'hello world';
    $scope.cart = {
        totalPrice: 0,
        items: []
    };

    // $scope.showMessage = function () {
    //     console.log(lowecaseFilter($scope.message));
    // }

    $scope.books = [{
        title: 'The Alcheimst',
        author: 'Paulo Cohelo',
        price: 30,
        rating: 5
    }, {
        title: 'The monk who sold his ferrari',
        author: 'Robin Sharma',
        price: 20,
        rating: 2
    }, {
        title: 'THE NIGHTINGALE',
        author: 'Kristin Hannah',
        price: 50,
        rating: 2
    }, {
        title: 'Harry Potter',
        author: 'J K Rowling',
        price: 10,
        rating: 4
    }];

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

    $scope.addBook = function() {
        //$scope.books.unshift(angular.copy($scope.newBook));
        $scope.books.unshift($scope.newBook);
        $scope.newBook = {};
    }

    function findInCart(title) {
        var foundItems = $scope.cart.items.filter(function(item) {
            return item.title == title;
        });
        return foundItems[0];
    }
})
