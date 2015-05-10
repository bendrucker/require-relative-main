'use strict'

import lookup from 'look-up'
import {dirname} from 'path'
import requireModule from 'require-module'
import {sync as resolveSync} from 'resolve'
import assert from 'assert'
import {enforce as enforceRelative} from 'dot-slash'

export default function requireRelativeMain (modulePath, cwd) {
  cwd = cwd || process.cwd()
  const basedir = dirname(lookup('package.json', {cwd}))
  let {main} = requireModule('./package.json', basedir)
  assert(main, 'package must define a "main" entry')
  main = enforceRelative(main, true)
  return requireModule(modulePath, dirname(resolveSync(main, {basedir})))
}
