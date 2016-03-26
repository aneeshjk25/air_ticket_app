define(function(){
	var module = angular.module('app.core.flights.controllers',[]);

	var DateController = function($scope){
		$scope.dateMap = {

		};
		$scope.open = function(key){
			$scope.dateMap[key] = !$scope.dateMap[key];
		};
	};
	module.controller('FlightsSearchController',['$scope','FlightsServices','AirportsServices',function($scope,FlightsServices,AirportsServices){
		$scope.search = {
			passenger : '1'
		};
		$scope.lists = {};
		$scope.lists.recordPassengers = [
			{ name : '1' , value : '1' },
			{ name : '2' , value : '2' },
			{ name : '3' , value : '3' },
			{ name : '4' , value : '4' },
			{ name : '5' , value : '5' },
			{ name : '6' , value : '6' },
			{ name : '7' , value : '7' }
		];
		angular.extend(this, new DateController($scope));
		$scope.airportSearch = function(value){
			return AirportsServices.search(value).then(function(response){
				return response;
			});
		};

		$scope.doSearch = function(form,data){

		};

	}]);
});