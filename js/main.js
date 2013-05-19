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
		
		//controllers
		"loadqueue": "controllers/loadqueue",
		"interface": "controllers/interfacecontroller"
		
	}
}, ['jquery', 'interface', 'pubsub'], function($, Interface, PubSub) {
	/*
		Load up the UI.
		Start loading lots of stuff.
	*/
	$(document).ready(function() {
		Interface.build();
	});
	
});
	
	
