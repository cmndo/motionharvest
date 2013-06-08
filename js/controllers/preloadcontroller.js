/*
	OBJECTIVE:
	Get this working with createJS added as a <script> tag
	Then turn createJS into an AMD Module. for now, #25 has the new creatjs.LoadQueue() call.
*/
define(['jquery', 'pubsub'], function($, PubSub) {


		var preload;

		//an array of assets is going to come in.
		PubSub.subscribe('Loader.PRELOAD_NEEDED', addAssetsToQueue);

		var groupQueue = [];
		var counter = 0;
		var stopped = true;
		var firstLoad = true;
		
		function addAssetsToQueue(evt) {

			if (stopped) {
				//disable Mouse hovers
				PubSub.publish("UI.MOUSE_LOCK", true);

				preload = new createjs.LoadQueue(true);
				preload.addEventListener("complete", handleComplete);
				preload.addEventListener("progress", handleOverallProgress);
				preload.setMaxConnections(1);
				stopped = false;

				if (firstLoad) {
					firsLoad = false;
					// put a function to call after the first load
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
				//turn off the engine.
				PubSub.publish("UI.MOUSE_LOCK", false);
			}, 500)

		}

		function handleOverallProgress(e) {
			for (var k = 0; k < groupQueue.length; k++) {
				groupQueue[k].onProgress({target: e.target, progress: preload.progress});
			}
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

	

	return {credit:"Aaron"};

})
