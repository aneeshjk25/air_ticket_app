define(function(){
	var module = angular.module('app.core.flights.services',[]);
	module.factory('FlightsServices', ['Restangular','ENV', function(Restangular,ENV){
		var qpx_api = Restangular.withConfig(function(RestangularConfigurer){
			RestangularConfigurer.setBaseUrl('https://www.googleapis.com/qpxExpress/v1/trips');
			RestangularConfigurer.setDefaultRequestParams({key : ENV.qpx_key });
		});
		var resource_url = 'search';
		return {
			search : function(data){
				return qpx_api.all(resource_url).post(data);
			}
		};
	}]);
});