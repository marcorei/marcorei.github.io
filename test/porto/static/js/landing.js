/*
 * app for marcorei / samples
 *
 * @author Markus Riegel riegel.markus@googlemail.com
 */

(function (window, angular, undefined) {




	/* 
	 * --------------------------
	 * APP
	 * --------------------------
	 */	


	var mrLandingApp = angular.module('mrLandingApp', [
		'mrLandingControllers',
		'mrPageEnterAnimate',
		'mrBackgroundParallax'
	]);


	mrLandingApp.config(function(SettingsProvider) {
  		SettingsProvider.setSettings({
  			completelyVisible: true
  		});
	});



	/* 
	 * --------------------------
	 * MODEL
	 * --------------------------
	 */


	var mrLandingModel = {

	};




	/* 
	 * --------------------------
	 * CONTROLLER
	 * --------------------------
	 */	


	var mrLandingControllers = angular.module('mrLandingControllers', []);






})(window, window.angular);



