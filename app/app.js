var booksCart = angular.module('booksCart', []);

booksCart.controller('bookCtrl', function ($scope) {
    $scope.books = [{
            title: 'The Alcheimst',
            author: 'Paulo Cohelo',
            price: 30,
            rating: 5
        }, {
            title: 'The monk who sold his ferrari',
            author: 'Robin Sharma',
            price: 20,
            rating: 1
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
})

