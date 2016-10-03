var todoApp = angular.module('todoApp', ['ngRoute']);

todoApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			template: '<todo-app></todo-app>'
		})
		.when('/about', {
			template: '<about-page></about-page>'
		})
		.otherwise({
			redirectTo: '/'
		})
})