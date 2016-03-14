var request = require('request'),
	cheerio = require('cheerio'),
	http = require('http'),
	fs = require('fs'),
	categories = [],
	urls = [],
	genre,
	url,
	path = require('path');
	

	
request('https://itunes.apple.com/us/genre/ios-games/id6014?mt=8', function(err, resp, body){
	if(!err && resp.statusCode == 200){
		var $ = cheerio.load(body);
		
		$('a', '.top-level-subgenres').each(function(){
			genre = this.text();
			url = this.attr('href');
			categories.push(genre);
			urls.push(url);
		});
		
	}
	var arrayLength = categories.length;
	console.log(arrayLength);

	for(var i=0; i < arrayLength; i++){
		request(urls[i], function(err, resp, body){
			if(!err && resp.statusCode == 200){
				var $ = cheerio.load(body);
				console.log(urls);
				console.log(categories);
					fs.mkdir(categories[i], '0777')
				
					var file = fs.createWriteStream('./' + categories[i] + '/' + categories[i]+ '.txt');
					$('a', '#selectedcontent').each(function(){
						var gameTitle = this.text();
						console.log(gameTitle);
						file.write(gameTitle + '\n');
					});
			}
		});
	}
});



