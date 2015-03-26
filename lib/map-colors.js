
var _ = require('lodash');
var keyword = require('closest-color-keyword');

module.exports = function(colors, options) {
 
  var options = options || {};
  var colornames = [];

  // Dedupe color names
  function checkDupes(name) {
    var index = _.indexOf(colornames, name);
    if (index > -1) {
      return true;
    } else {
      return false;
    }
  }

  function rename(name, hex) {
    var i = 1;
    var renamed = keyword(hex);
    if (checkDupes(renamed)) {
      while (checkDupes(renamed)) {
        i++;
        renamed = name + '-' + i;
      }
      return renamed;
    } else {
      return renamed;
    }
  }

  function createColorObject(hex) {
    var name = keyword(hex, { basic: options.basic || false });
    if (checkDupes(name)) {
      name = rename(name, hex);
      colornames.push(name);
    } else {
      colornames.push(name);
    }
    return {
      name: name,
      hex: hex,
    }
  };

  colors = colors.map(createColorObject);

  return colors;

};
