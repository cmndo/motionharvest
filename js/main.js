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
		"system": "utils/system",
		
		//controllers
		"loader": "controllers/preloadcontroller",

		//intro
		"logo_intro" : "code/logo_intro/intro",

        //real deal
        "navigation": "examples/navigation/nav"

		
	}
}, ['jquery', 'pubsub', 'loader','system'], function($, PubSub, PreloadController, System) {

	$(document).ready(function() {

		/*
			Mobile Check
		
		if(System.ios()){
			buildMobileInterface();	
		}else{
			buildDesktopInterface();
		}
		*/
		
			
		curl('logo_intro');
		PubSub.subscribe("Intro.COMPLETE", buildInterface);
			
		function buildInterface(e){
			curl('navigation');	
		}
		

	});
});
	
	
