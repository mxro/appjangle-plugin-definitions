
(function($, Nextweb) {
	
	$.fn.initRichTextEditor = function(params) {
		
		// a function called whenever value changed locally
		var onLocalChange = params.onLocalChange;
		
		// a function called whenever value changed on server
		var onRemoteChange = params.onRemoteChange;
		
		
		return {
			// loads a node from the Appjangle cloud and displays it in the
			// editor
			// if the specified node is already loaded, do nothing
			load: function(address, secret) {
				
			},
			// reloads the currently displayed node from the Appjangle cloud and
			// displays the most recent version
			reload: function() {
				
			},
			// commits changes made on the editor to the Appjangle cloud
			commit: function() {
				
			},
			setOnLocalChange: ...,
			setOnRemoteChange: ...,
		};
		
	};
	

}(jQuery, Nextweb));
