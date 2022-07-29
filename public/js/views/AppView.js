var AppView = Backbone.View.extend({
	events: {
		"click #btn-about":     "about",
		"click #btn-projects":  "projects",
		"click #btn-contact":   "contact",
		"click #btn-volunteer": "volunteer",
		"click #btn-login":     "login",
		"click #btn-logout":    "logout",
		"click #btn-account":   "account"
	},

	initialize: function() {
		_.bindAll(this, 'render', 'about', 'projects', 'contact', 'volunteer', 'login', 'logout', 'account');
	},

	render: function() {
		$('#header').html(Templates.header);
		$("head").append('<link rel="stylesheet" href="/css/header.css" type="text/css">');

		// TODO: login stuffs
		if (typeof App.user != 'undefined') {
			// $("#header .public").hide();
		}
	},

	about: function() {
		e.preventDefault();
		App.router.navigate("", true);
	},

	projects: function() {
		e.preventDefault();
		App.router.navigate("", true);
	},

	contact: function() {
		e.preventDefault();
		App.router.navigate("", true);
	},

	volunteer: function() {
		e.preventDefault();
		App.router.navigate("", true);
	},

	login: function() {
		e.preventDefault();
		App.router.navigate("", true);
	},

	logout: function() {
		e.preventDefault();
		App.router.navigate("", true);
	},
	
	account: function() {
		e.preventDefault();
		App.router.navigate("", true);
	}
})