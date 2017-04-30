// HomeController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

'use strict';

angular.module('mostPopularListingsApp.galaxyView', ['ngRoute'])

// Routing configuration for this module
.config(['$routeProvider',function($routeprovider){
	$routeprovider.when('/galaxyView', {
		controller: 'GalaxyViewCtrl',
		templateUrl: 'components/views/galaxyView.html'
	});
}])

// Controller definition for this module
.controller('GalaxyViewCtrl', ['$scope', function($scope) {

	// Just a housekeeping.
	// In the init method we are declaring all the
	// neccesarry settings and assignments to be run once
	// controller is invoked
	init();

	function init(){
	
	};

	this.message = "Hello Home!";



  
  
}]);