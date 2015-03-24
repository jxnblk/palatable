
var fs = require('fs');
var path = require('path');
var palatable = require('..');
var assert = require('assert');
var cssnext = require('cssnext');
var palette = require('colorbrewer').Spectral[11];

var css = palatable({ colors: palette });
var css4 = palatable({
  colors: palette,
  customProperties: true
});
var compiled;

fs.writeFileSync(path.join(__dirname, 'colorbrewer-spectral.css'), css);
var primary = palatable({ colors: ['#f00', '#008000', '#00f'] });
fs.writeFileSync(path.join(__dirname, 'primary.css'), primary);

describe('palatable', function() {

  it('should return a string', function() {
    assert.equal(typeof css, 'string');
  });

  it('should compile with cssnext', function() {
    assert.doesNotThrow(function() {
      compiled = cssnext(css4);
    });
  });

  it('should compile to the same css3', function() {
    assert.equal(css.trim(), compiled.trim());
  });

});

