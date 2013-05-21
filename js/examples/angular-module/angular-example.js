define(['jquery', 'root'], function($, root){
	
	curl("text!examples/angular-module/app.html", function(data){
		
		var $d = $(data);
		root.append($d);
		
		angular.bootstrap(document);
		
       	
	});
	
});
