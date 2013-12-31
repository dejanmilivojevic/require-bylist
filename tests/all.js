var req = require('../index.js');
var tap = require('tap');
var test = tap.test;

var paths = [
    './tests/foo',
    './tests/bar',
    './tests/baz'
]

req.paths(paths);

test('Do we require the right files', function(t){
    var a = req.require('a.js');
    var b = req.require('b.js');
    var c = req.require('c.js');

    t.equal(a.file, 'foo/a', 'a.file should be foo/a');
    t.equal(b.file, 'bar/b', 'b.file should be bar/b');
    t.equal(c.file, 'baz/c', 'c.file should be baz/c');
    t.end();
});

test('What if file is missing', function(t){
    t.plan(1);
    
    try {
        req.require('d.js');
    } catch (e) {
        t.ok(true, 'Throws an exeptions');
    } finally {
        t.end();
    }
});
