// @flow
import zip from './'
import test from 'tape'

test('zip', (t) => {
  t.deepEqual(zip(['a', 'b', 'c'], [1, 2, 3]), [['a', 1], ['b', 2], ['c', 3]])
  t.end()
})
