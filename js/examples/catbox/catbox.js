define(['jquery', 'mustache', 'pubsub', 'root'], function($, mustache, PubSub, root){

	var base = "js/examples/catbox/";
	var catbox;
	
	function onLoadComplete(e){
		//relative to baseUrl
		curl("text!examples/catbox/bin.html", function(data){
			
			//mustache this template
			root.append(mustache.render(data, { greeting: "Win"}));
			
			var $imageWrapper = $('#image_wrapper', root);
			
			catbox = $('<div/>').css({
				width: 200,
				height: 287,
				background: 'purple'
			}).append(e[0]).on('click', function(e){
				
				console.log("clicked");
				
			});
			
			$imageWrapper.append(catbox);
			
		});
	}
	function onLoadProgress(e){
		//maybe want to show a loading screen
	}
	
	
	//the things you want the outside to be able to trigger go here
	return {
		build: function(){
			//want to do anything before loading?
			root.append("Hello<br/>");
			
			
			PubSub.publish("Loader.PRELOAD_NEEDED", {
				//relative to base
				assets : [base +'cat.jpg'],
				onComplete : onLoadComplete,
				onProgress : onLoadProgress
			});
			
		}
	}
})
