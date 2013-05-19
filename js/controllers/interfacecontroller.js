define(['jquery', 'pubsub'], function($, PubSub){
	//treat this just like a jsbin
	var root = $("#root");
	
	var catbox = $('<div/>').css({
		width: 200,
		height: 287,
		background: 'purple'
	}).on('click', function(e){
		PubSub.publish("BOX_CLICK", {working:true})
	});
	
	/*
		Soon, I'll use
		$.get("examples/catbox/markup.html", function(e){
			
		});
	*/
	
	
	//the things you want the outside to be able to trigger go here
	return {
		build: function(){
			
			PubSub.publish("Loader.PRELOAD_NEEDED", {
				assets : ['examples/cat.jpg'],
				onComplete : function(evt){
					catbox.append(evt[0]);
					root.append(catbox);	
				}
			});
			
		}
	}
})
