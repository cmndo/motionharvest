define(['jquery', 'root'], function($, root){
	
	curl("text!examples/angular-module-copy/app.html", function(data){
		
		var $app = $(data);
		root.append($app);
		
		angular.bootstrap(document);
       	
	});
	
});
/*
For the next example take a look at  http://jsbin.com/ibeyoh/1/edit
	
angular.module('MyApp1', []).controller("Goober", function($scope){
  $scope.replace_me = "I WIN..";
});
angular.bootstrap($('#App1'),['MyApp1']);


angular.module('MyApp2', []).controller("Goober", function($scope){
  $scope.replace_me = "..at Geekery!";
});
angular.bootstrap($('#App2'),['MyApp2']);


*/
