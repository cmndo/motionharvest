/*
Define the base script url
Establish some paths to libraries that are used frequently
*/
curl({
	baseUrl : "js",
	paths : {
		//libs
		"jquery" : "libs/jquery-1.7.2.min", //slightly modified for noConflict
		"preload": "libs/preloadjs-0.3.0.min.js",
		
		
		//utils
		"pubsub" : "utils/pubsub", //event wizardry
		"mathutils": "utils/mathutils"
		
		//interface controllers
		
	}
}, ['jquery', 'interface'], function($, Interface) {
	/*
		Load up the UI.
		Start loading lots of stuff.
	*/
	$(document).ready(function() {
		
	}
});
	
	
