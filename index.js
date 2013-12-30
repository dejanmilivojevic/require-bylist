var path = require('path');
var fs = require('fs');


var paths = [];


module.exports.require = function(filename) {
    var i;
    var target;
    for (i=0; i<paths.length; i++) {
        var dir = paths[i];
        
        if (fs.existsSync(path.normalize(__dirname + '/' + dir) + '/' + filename) && fs.statSync(path.normalize(__dirname + '/' + dir) + '/' + filename).isFile()) {
            target = require(path.normalize(__dirname + '/' + dir) + '/' + filename);
            break;
        }
    }

    return target;
}

module.exports.paths = function(dirs) {
    paths = dirs;
}