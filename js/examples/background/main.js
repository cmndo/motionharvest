define(['jquery', 'pubsub', 'root'], function($, PubSub, root){

	var backgroundPattern = "js/examples/background/escheresque_ste.png";
	
	
	function onLoadComplete(e){
		root.css({
			"background":"url(" + backgroundPattern + ")"
		});
	}
	function onLoadProgress(e){
		//maybe want to show a loading screen
	}
	
	
	PubSub.publish("Loader.PRELOAD_NEEDED", {
		assets : [backgroundPattern],
		onComplete : onLoadComplete,
		onProgress : onLoadProgress
	});
	
	return true;
})
