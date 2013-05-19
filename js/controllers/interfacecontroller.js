define(['jquery', 'pubsub', 'stage'], function($, PubSub, root){

	var base = "examples/catbox/";
	
	var catbox;
	var binLoaded = false;
	
	$.get(base + "bin.html", function(data){
		binLoaded = true;
		
		
		root.append(data);
		catbox = $('<div/>').css({
			width: 200,
			height: 287,
			background: 'purple'
		}).on('click', function(e){
			PubSub.publish("BOX_CLICK", {working:true})
		});
	});
	/*
		Will examples/catbox/bin.html be loaded by the time the onComplete is finished?
	*/
	
	
	
	//the things you want the outside to be able to trigger go here
	return {
		build: function(){
			//want to do anything before loading?
			root.append("Hello<br/>");
			
			
			PubSub.publish("Loader.PRELOAD_NEEDED", {
				assets : [base +'cat.jpg'],
				onComplete : function(e){
					console.log(binLoaded);
					
					catbox.append(e[0]);
					root.append(catbox);	
				},
				onProgress : function(e){
					//maybe want to show a loading screen
				}
			});
			
		}
	}
})
