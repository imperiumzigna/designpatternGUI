/**
 * Created by igora on 24/08/2016.
 */
module.exports.listPatterns = function() {
	var p = require('path');
	var fs = require('fs');
	var patternsDir = process.cwd() + "/Patterns";
	var i = 0;
	var walk = require('walkdir');
	var dirNames = fs.readdirSync(patternsDir, {options: '..', encoding: 'utf8'});

	var raw_data = walk.sync(patternsDir,{"return_object":true},function(path,stat){
		// ignore all .git directories.
		if(p.basename(path) === '.git') {
			this.ignore(path);
		}

	});


	var data = {};

	

	while(i<dirNames.length){
		if(dirNames[i]==='.git'){
			dirNames[i] = dirNames[i+1];

		}

		data = {DirName:dirNames[i],Files: []}
		i++;
	}
return data;
}





module.exports.loadPattern = function(fileJSON){

}
module.exports.checkPattern = function(fileJSON){

}
module.exports.editPattern = function(fileJSON,Keys){

}


