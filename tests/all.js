var req = require('../index.js');
var tap = require('tap');
var test = tap.test;

var paths = [
    './tests/foo',
    './tests/bar',
    './tests/baz'
]

req.paths(paths);

test('test', function(t){
    var a = req.require('a.js');
    var b = req.require('b.js');
    var c = req.require('c.js');
    var d = req.require('d.js');

    t.equal(a.file, 'foo/a', 'a.file should be foo/a');
    t.equal(b.file, 'bar/b', 'b.file should be bar/b');
    t.equal(c.file, 'baz/c', 'c.file should be baz/c');
    t.equal(d, undefined, 'd.file should be undefined');
    t.end();
});
