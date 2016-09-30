booksCart.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'bookCtrl'
        })
        .when('/add-book', {
            templateUrl: 'templates/add-book.html',
            controller: 'addBookCtrl',
            controllerAs: 'ctrl'
        })
        .when('/about', {
            template: '<h1>About</h1>'
        })
        .otherwise({
            redirectTo: '/about'
        });
});