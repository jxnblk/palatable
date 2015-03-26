
var _ = require('lodash');
var mapColors = require('./lib/map-colors');

module.exports = function(options) {

  var options = options || {};
  options = _.defaults(options, {
    name: 'colors',
    colors: [],
    customProperties: false,
    prefix: false,
    basic: false,
  });

  var colors = mapColors(options.colors, options);
  var prefix = options.prefix || '';
  var colorCss;
  var backgroundColorCss;
  var borderColorCss;


  function colorRules(color) {
    return [
      '.',
      prefix,
      color.name,
      ' { color: ',
      options.customProperties ? 'var(--' + color.name + ')' : color.hex,
      '; }'
    ].join('');
  }

  function backgroundColorRules(color) {
    return [
      '.',
      prefix,
      'bg-',
      color.name,
      ' { background-color: ',
      options.customProperties ? 'var(--' + color.name + ')' : color.hex,
      '; }'
    ].join('');
  }

  function borderColorRules(color) {
    return [
      '.',
      prefix,
      'border-',
      color.name,
      ' { border-color: ',
      options.customProperties ? 'var(--' + color.name + ')' : color.hex,
      '; }'
    ].join('');
  }

  function customProperties(color) {
    return [
      '  --',
      prefix,
      color.name,
      ': ',
      color.hex,
      ';'
    ].join('');
  }

  colorCss = colors.map(colorRules).join('\n');
  backgroundColorCss = colors.map(backgroundColorRules).join('\n');
  borderColorCss = colors.map(borderColorRules).join('\n');

  if (options.customProperties) {
    customProperties = [
      ':root {',
      colors.map(customProperties).join('\n'),
      '}'
    ].join('\n') + '\n';
  } else {
    customProperties = '';
  }

  var header = [
    '/*',
    '',
    '  ' + options.name,
    '',
    '*/'
  ].join('\n');

  var css = [
    header,
    colorCss,
    backgroundColorCss,
    borderColorCss,
    customProperties
  ].join('\n\n');

  return css;

};

