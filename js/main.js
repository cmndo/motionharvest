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
		"stage": "utils/stage",
		
		//controllers
		"loader": "controllers/preloadcontroller",
		"interface": "controllers/interfacecontroller"
		
	}
}, ['jquery', 'interface', 'pubsub', 'loader'], function($, Interface, PubSub, PreloadController) {
	/*
		Load up the UI.
		Start loading lots of stuff.
	*/
	$(document).ready(function() {
		Interface.build();
	});
	
});
	
	
