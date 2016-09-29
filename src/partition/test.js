// @flow
import partition from './'
import test from 'tape'

test('partition', (t) => {
  t.deepEqual(partition([1, 2, 3, 4], (x) => x < 3), [[1, 2], [3, 4]])
  t.end()
})
