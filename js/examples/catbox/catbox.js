define(['jquery', 'mustache', 'pubsub', 'root'], function($, mustache, PubSub, root){

	var base = "js/examples/catbox/";
	var $catbox;
	
	function onLoadComplete(e){
		//relative to baseUrl
		curl("text!examples/catbox/bin.html", function(data){
			
			//mustache this template
			root.append(mustache.render(data, { greeting: ">> Templating Example <<"}));
			
			
			
			var $imageWrapper = $('#image_wrapper', root);
			
			$catbox = $('<div/>').css({
				width: 200,
				height: 287
			}).hide().append(e[0]).on('click', function(e){
				e.preventDefault();
				console.log("Events fire like this.");
			});
			
			$imageWrapper.append($catbox.fadeIn());
			root.append("[Debug - Image Displayed]<br/>");
			
		});
	}
	function onLoadProgress(e){
		//maybe want to show a loading screen
	}
	
	
	//the things you want the outside to be able to trigger go here
	return {
		build: function(){
			//want to do anything before loading?
			root.append("[Debug - Preloading Image]<br/>");
			
			
			PubSub.publish("Loader.PRELOAD_NEEDED", {
				//relative to base
				assets : [base +'cat.jpg'],
				onComplete : onLoadComplete,
				onProgress : onLoadProgress
			});
			
		}
	}
})
