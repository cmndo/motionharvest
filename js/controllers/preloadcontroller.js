define(['jquery', 'pubsub'], function($, PubSub) {

	function PreloadController($elem) {

		

		var preload;

		//an array of assets is going to come in.
		//For a refresher on pubsub look in /utils/pubsub.js
		PubSub.subscribe('Loader.PRELOAD_NEEDED', addAssetsToQueue);

		var groupQueue = [];
		var counter = 0;

		var stopped = true;

		var firstLoad = true;
		function addAssetsToQueue(evt) {

			if (stopped) {
				//disable Mouse hovers
				PubSub.publish("UI.MOUSE_LOCK", true);

				preload = new createjs.LoadQueue();
				$bar.css('width', '1%');
				$el.show();

				//load events
				preload.addEventListener("complete", handleComplete);
				preload.addEventListener("progress", handleOverallProgress);
				preload.setMaxConnections(1);
				stopped = false;

				if (firstLoad) {
					firsLoad = false;
					gradBack();
				}

			}

			groupQueue.push(evt.data);
			//{assets:[], src:""}

			//use counter while incrementing to identify the group the asset is in
			var name = counter;
			for (var i = 0; i < evt.data.assets.length; i++) {
				preload.loadFile({
					id : counter + "_" + i,
					src : evt.data.assets[i]
				});
			}
			counter++;

		}

		/*
		 * HANDLE ALL FILES COMPLETED
		 */
		function handleComplete(evt) {

			var parseID;
			var output = [];

			//loop through object and put the loaded assets in the right place
			for (var i in evt.target._loadedResults) {
				parseID = i.toString().split("_");

				//if this output level doesn't exist, create a new array
				if (!output[parseID[0]]) {
					output[parseID[0]] = [];
				}
				for (var j in evt.target._loadedResults[i]) {
					//with the new output level made, lets start putting assets in
					output[parseID[0]][parseID[1]] = evt.target._loadedResults[i];
				}

			}

			//output mimics the structure of the original queue object.
			//loop through and call the callbcak with the result from the callback

			for (var k = 0; k < groupQueue.length; k++) {

				groupQueue[k].onComplete(output[k]);

			}

			//reset all
			groupQueue = [];
			output = [];
			counter = 0;
			preload.setPaused(true);
			preload.close();
			stopped = true;
			setTimeout(function() {

				$el.fadeOut(200, function() {
					$grad_loader.hide();
				});
				PubSub.publish("UI.MOUSE_LOCK", false);
			}, 500)

		}

		function handleOverallProgress(e) {
			$bar.css('width', Math.round(preload.progress * 100) + "%");
		}

		//preload.addEventListener("fileload", handleFileLoad);
		//
		//preload.addEventListener("fileprogress", handleFileProgress);
		//preload.addEventListener("error", handleFileError);

		function handleLoadStart(e) {
			console.log('load started');
		}

		function handleFileLoad(e) {
			console.log('single file load');
		}

		function handleFileProgress(e) {
			console.log('single file progress');
		}

		function handleFileError(e) {
			console.log('file error');
		}

	}

	return PreloadController;

})
