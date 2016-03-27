define(['../modules/flights-module','../modules/airports-module','config/http.interceptors.services'],function(){
	var module = angular.module('app.core',['app.libs','app.core.flights','app.core.airports','app.core.http.interceptor.services']);
});