// Work in progress

module.exports(names, options) {

  var options = options || {};
  // prefix, suffix

  var usedNames = [];

  // Dedupe names
  function checkDupes(name) {
    var index = _.indexOf(usedNames, name);
    if (index > -1) {
      return true;
    } else {
      return false;
    }
  }

  function addSuffix(name, idx) {
    var idx = idx || 2;
    name += '-' + idx;
    if (checkDupes(name)) {
      idx++;
      addSuffix(name, idx);
    } else {
      return name;
    }
  }


  function mapName(name) {
    if (checkDupes(name)) {
      name = addSuffix(name);
      usedNames.push(name);
    } else {
      usedNames.push(name);
      return name;
    }
  });

  return names;
};

