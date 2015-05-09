'use strict'

import test from 'tape'
import {resolve} from 'path'
import requireRelativeMain from '../'

test((t) => {
  useFixtures('normal/src')
  t.equal(requireRelativeMain('./other'), 'i am other')
  useFixtures('no-main')
  t.throws(requireRelativeMain.bind(null), /must define a "main"/)
  t.end()
})

function useFixtures (name) {
  process.chdir(resolve(__dirname, `./fixtures/${name}`))
}
