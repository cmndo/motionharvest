define(function(){
	return {
    	ios: function(){
			/*
			Check if its IOS
			*/
			return (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
		}
	};
});
