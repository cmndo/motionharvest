/*
Define the base script url
Establish some paths to the libraries
*/
curl({
	baseUrl : "js",
	paths : {
		//libs
		"jquery" : "libs/jquery-1.7.2.min", //slightly modified for noConflict
		"mustache" : "libs/mustache",
		
		//utils
		"pubsub" : "utils/pubsub", //event wizardry
		"mathutils": "utils/mathutils",
		"root": "utils/root",
		
		//controllers
		"loader": "controllers/preloadcontroller",
		
		//example
		"cat_example": "examples/catbox/catbox",
		"background_example": "examples/background/main",
		
		//Angular dynamically loaded
		"angular_example" : "examples/angular-module/angular-example"
		
	}
}, ['jquery', 'pubsub', 'loader'], function($, PubSub, PreloadController) {
	/*
		Start loading some examples
		jQuery just loaded, lets make sure jQuery's ready to be used
	*/
	$(document).ready(function() {
		
		curl(['cat_example'], function(catExample){
			catExample.build();
		});
		
		curl('background_example');
		
		curl('angular_example');
	});

});
	
	
