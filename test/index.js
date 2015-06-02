'use strict'

var test = require('tape')
var resolve = require('path').resolve
var requireRelativeMain = require('../')

test(function (t) {
  t.equal(requireRelativeMain('./other', resolve(__dirname, 'fixtures/normal')), 'i am other')
  t.equal(requireRelativeMain('./other', resolve(__dirname, 'fixtures/dot-slash')), 'no dot')
  t.throws(requireRelativeMain.bind(null, 'foo', resolve(__dirname, 'fixtures/no-main')), /must define a "main"/)
  t.end()
})
