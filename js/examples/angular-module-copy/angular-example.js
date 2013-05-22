define(['jquery', 'root'], function($, root){
	
	curl("text!examples/angular-module-copy/app.html", function(data){
		
		var $app = $(data);
		root.append($app);
		
		angular.bootstrap(document);
       	
	});
	
});
