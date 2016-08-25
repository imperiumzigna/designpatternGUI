/**
 * Created by igora on 24/08/2016.
 */
module.exports.listPatterns = function() {
	var path = require('path');
	var fs = require('fs');
	var patternsDir = process.cwd() + "/Patterns";
	var data;
	var DirTree = require('dir_tree');
	var jsonfile = require('jsonfile');
	var dir_tree_obj = new DirTree(patternsDir);

	 dir_tree_obj.on('data', function(dados){
	 	var json = dados.serial();
		jsonfile.writeFile(patternsDir + '/Files.json',json,function(err){});
	});

	var data = require( patternsDir + '/Files.json')
return data;
}





module.exports.loadPattern = function(fileJSON){

}
module.exports.checkPattern = function(fileJSON){

}
module.exports.editPattern = function(fileJSON,Keys){

}


