console.log("app.js file loaded");

var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'Resources/home.html'
	}).when('/home', {
		templateUrl: 'Resources/home.html'
	}).when('/login', {
		templateUrl: 'Resources/login.html'
	}).when('/register', {
		templateUrl: 'Resources/register.html',
	}).when('/about', {
		templateUrl: 'resources/about.html',
	}).when('/contact', {
		templateUrl: 'resources/contact.html',
	}).when('/viewEmployee', {
		templateUrl: 'resources/viewEmployeeList.html',
	}).when('/updateEmployee', {
		templateUrl: 'resources/updateEmployee.html',
	});
});
app.controller("MainController",['$scope',function($scope){



}]);
