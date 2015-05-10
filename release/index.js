'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = requireRelativeMain;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lookUp = require('look-up');

var _lookUp2 = _interopRequireDefault(_lookUp);

var _path = require('path');

var _requireModule2 = require('require-module');

var _requireModule3 = _interopRequireDefault(_requireModule2);

var _resolve = require('resolve');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _dotSlash = require('dot-slash');

'use strict';

function requireRelativeMain(modulePath, cwd) {
  cwd = cwd || process.cwd();
  var basedir = _path.dirname(_lookUp2['default']('package.json', { cwd: cwd }));

  var _requireModule = _requireModule3['default']('./package.json', basedir);

  var main = _requireModule.main;

  _assert2['default'](main, 'package must define a "main" entry');
  main = _dotSlash.enforce(main, true);
  return _requireModule3['default'](modulePath, _path.dirname(_resolve.sync(main, { basedir: basedir })));
}

module.exports = exports['default'];