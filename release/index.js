'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = requireRelativeMain;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lookUp = require('look-up');

var _lookUp2 = _interopRequireDefault(_lookUp);

var _path = require('path');

var _cwd = require('cwd');

var _cwd2 = _interopRequireDefault(_cwd);

var _requireModule2 = require('require-module');

var _requireModule3 = _interopRequireDefault(_requireModule2);

var _resolve = require('resolve');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

'use strict';

function requireRelativeMain(modulePath) {
  var basedir = _cwd2['default']();

  var _requireModule = _requireModule3['default']('./package.json', basedir);

  var main = _requireModule.main;

  _assert2['default'](main, 'package must define a "main" entry');
  return _requireModule3['default'](modulePath, _path.dirname(_resolve.sync(main, { basedir: basedir })));
}

module.exports = exports['default'];