var WelcomeView = Backbone.View.extend({
	events: {
	},

	initialize: function(){
		// nothing??
	},

	render: function() {
		$("head").append('<link rel="stylesheet" href="/css/landing.css" type="text/css">');
		$("#app").html(Templates.welcome);
	}
})