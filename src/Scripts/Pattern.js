/**
 * Created by igora on 24/08/2016.
 */
module.exports.listPatterns = function() {

	var fs = require('fs');
	var patternsDir = process.cwd() + "/Patterns";

	var data = fs.readdirSync(patternsDir, {options: '..', encoding: 'utf8'});

	return data;
}





module.exports.loadPattern = function(fileJSON){

}
module.exports.checkPattern = function(fileJSON){

}
module.exports.editPattern = function(fileJSON,Keys){

}


