var app=angular.module('myApp',['ui.router',,'ngResource']);
app.config(
function($stateProvider,$urlRouterProvider)
{
	$stateProvider.
	    state('login',{
	    	url:'/login',
	    	templateUrl:'templates/login.html',
	    	controller:'userCtrl'//controller to hand;e the login click events and,validation data display etc
	    				}
	         );

	     $urlRouterProvider.otherwise('/login');
}
);
