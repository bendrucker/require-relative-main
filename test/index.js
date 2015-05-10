'use strict'

import test from 'tape'
import {resolve} from 'path'
import requireRelativeMain from '../'

test((t) => {
  t.equal(requireRelativeMain('./other', resolve(__dirname, 'fixtures/normal')), 'i am other')
  t.throws(requireRelativeMain.bind(null, 'foo', resolve(__dirname, 'fixtures/no-main')), /must define a "main"/)
  t.end()
})
