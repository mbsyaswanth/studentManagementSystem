console.log("app.js file loaded");

var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'Resources/home.html'
	}).when('/home', {
		templateUrl: 'Resources/home.html'
	}).when('/index1', {
		templateUrl: 'Resources/index1.html'
	}).when('/login', {
		templateUrl: 'Resources/login.html',
		controller:'MainController',
		controllerAs:'login'
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
app.controller("MainController",function($http){
	console.log("testing controller");
  this.test=function(data) {
  	//console.log("this is working");
		$http.post('/login',this.data);
  };

});
