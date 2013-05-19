define(['jquery', 'pubsub', 'root'], function($, PubSub, root){

	var base = "js/examples/catbox/";
	
	var catbox;
	var binLoaded = false;
	
	function onLoadComplete(e){
		$.get(base + "bin.html", function(data){
			//attach data into the element we're using as 
			root.append(data);
			
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
				assets : [base +'cat.jpg'],
				onComplete : onLoadComplete,
				onProgress : onLoadProgress
			});
			
		}
	}
})
