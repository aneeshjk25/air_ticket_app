define(['json!env.json','core','libs'],function(env){
	var app = angular.module('app',['app.core','app.libs'])
					 .constant("ENV",env);
});