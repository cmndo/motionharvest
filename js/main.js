/*
Define the base script url
Establish some paths to the libraries
*/
curl({
	baseUrl : "js",
	paths : {
		//libs
		"jquery" : "libs/jquery-1.7.2.min", //slightly modified for noConflict
		
		//utils
		"pubsub" : "utils/pubsub", //event wizardry
		"mathutils": "utils/mathutils",
		"root": "utils/root",
		
		//controllers
		"loader": "controllers/preloadcontroller",
		
		//example
		"cat_example": "examples/catbox/main"
		
	}
}, ['jquery', 'pubsub', 'loader'], function($, PubSub, PreloadController) {
	/*
		Load up the UI.
		Start loading lots of stuff.
	*/
	$(document).ready(function() {
		
		curl(['cat_example'], function(catExample){
			catExample.build();
		});
	
	});
	
});
	
	
