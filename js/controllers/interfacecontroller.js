define(['jquery', 'pubsub'], function($, PubSub){
	//treat this just like a jsbin
	var root = $("#root");
	
	var box = $('<div/>').css({
		width: 100,
		height: 100,
		background: 'purple'
	});
	box.on('click', function(e){
		PubSub.publish("BOX_CLICK", {working:true})
	});
	
	
	
	
	//the things you want the outside to be able to trigger go here
	return {
		build: function(){
			root.append(box);
		}
	}
})
