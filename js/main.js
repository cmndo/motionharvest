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
		
		/*//examples
		"cat_example": "examples/catbox/catbox",
		"background_example": "examples/background/main",
		"angular_example" : "examples/angular-module/angular-example",
		"angular_example_copy" : "examples/angular-module-copy/angular-example",*/
		
		//intro
		"logo_intro" : "code/logo_intro/intro"
		
	}
}, ['jquery', 'pubsub', 'loader'], function($, PubSub, PreloadController) {
	/*
		Start loading some examples
		jQuery just loaded, lets make sure jQuery's ready to be used
	*/
	$(document).ready(function() {
		/* These are great examples :)
		curl(['cat_example'], function(catExample){
			catExample.build();
			curl('angular_example_copy');
		});
		curl('background_example');
		curl('angular_example');
		*/
		
		curl('logo_intro');
		PubSub.subscribe("Intro.COMPLETE", buildInterface);
		
		function buildInterface(e){
			curl('site_navigation');	
		}
	});

});
	
	
