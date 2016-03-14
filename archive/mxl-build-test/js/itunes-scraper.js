var request = require('request'),
	cheerio = require('cheerio'),
	http = require('http'),
	fs = require('fs'),
	urls = [],
	path = require('path'),
	i = 0;
	
	
request('https://itunes.apple.com/us/genre/ios-games-action/id7001?mt=8', function(err, resp, body){
	if(!err && resp.statusCode == 200){
		var $ = cheerio.load(body);
		

		fs.mkdir('action', '0777')
		
		var file = fs.createWriteStream('./action/action.txt')
		$('a', '#selectedcontent').each(function(){
			var gameTitle = this.text();
			console.log(gameTitle);
			file.write(gameTitle + '\n');
		});

	}
});

