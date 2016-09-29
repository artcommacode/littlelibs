// @flow
import range from './'
import test from 'tape'

test('range', (t) => {
  t.deepEqual(range(4), [0, 1, 2, 3])
  t.end()
})
