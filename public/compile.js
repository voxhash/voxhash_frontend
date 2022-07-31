#!/usr/bin/env node

const fs = require('fs');

const directory = __dirname+"/templates";

function bundle() {

	var scripts = [
		'jquery.min',
		'json2',
		'underscore-min',
		'handlebars.min',
		'backbone-min',
		'jquery.masonry.min',
		'jquery.tagsinput.min',
		'bootstrap-modal',
		'jquery-ui.min',
		'models/Bookmark',
		'models/BookmarksCollection',
		'models/Tag',
		'models/TagsCollection',
		'views/PublicView',
		'views/AccountView',
		'views/EditView',
		'views/BookmarkView',
		'views/BookmarksView',
		'views/TagView',
		'views/TagsView',
		'views/AppView',
		'routers/BookmarklyRouter',
		'App'
	];

	var templates = [];

	const files = fs.readdirSync(directory);

	files.forEach(file => {
		if (file.endsWith(".html"))
			templates.push(file.replace(".html", ""));
	});
	
	// var templates = ['account', 'bookmark', 'edit', 'footer', 'header', 'index', 'pub', 'tag', 'bookmarks'];
	
	var bundle = '';
	// scripts.forEach(function(file) {  
	// 	bundle += "\n/**\n* " + file + ".js\n*/\n\n" + fs.readFileSync(__dirname + '/public/js/' + file + '.js') + "\n\n";
	// });
	
	// var ast = parser.parse(bundle);
	// ast = uglifyer.ast_mangle(ast);
	// ast = uglifyer.ast_squeeze(ast);
	// bundle = uglifyer.gen_code(ast)
	
	// fs.writeFileSync(__dirname + '/js/bundle.js', bundle, 'utf8');
	
	bundle = "Templates = {};\n";
	templates.forEach(function(file) {
		var html = fs.readFileSync(directory + "/" + file + '.html', 'utf8');
		html = html.replace(/(\r\n|\n|\r)/gm, ' ').replace(/\s+/gm, ' ').replace(/'/gm, "\\'");
		bundle += "Templates." + file + " = '" + html + "';\n";
	});

	fs.writeFileSync(__dirname + '/js/templates.js', bundle, 'utf8');

}

function watchall() {
	bundle();
	console.log("Watching " + directory);
	fs.watch(directory, (eventType, filename) => {
		console.log(eventType + ": " +filename);
		bundle();
	})
}

watchall();
// bundle();