// @flow
import flatten from './'
import test from 'tape'

test('flatten', (t) => {
  t.deepEqual(flatten([1, [2, [3]]]), [1, 2, 3])
  t.end()
})
