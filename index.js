var path = require('path');
var fs = require('fs');
var p = process;
var dirname = p.cwd();

var paths = [];


module.exports.require = function(filename) {
    var i;
    var target = null;
    for (i=0; i<paths.length; i++) {
        var dir = paths[i];
        var fullpath = path.normalize(dirname + '/' + dir + '/' + filename);

        if (fs.existsSync(fullpath) && fs.statSync(fullpath).isFile()) {
            target = require(fullpath);
            break;
        }
    }

    if (!target) {
        throw new Error("Require failed for: " + fullpath);
    }

    return target;
}

module.exports.paths = function(dirs) {
    paths = dirs;
}