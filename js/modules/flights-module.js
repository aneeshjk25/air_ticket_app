define(['../controllers/flights.controllers','../services/flights.services'],function(){
	var module = angular.module('app.core.flights',['app.core.flights.controllers' , 'app.core.flights.services' ]);
	module.config(['$stateProvider',function($stateProvider){
		$stateProvider.state('flights',{
			url : '/flights',
			templateUrl : '../../flights/search.html',
			controller : 'FlightsSearchController'
		});
	}]);
});