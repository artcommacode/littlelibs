// @flow
import chunkify from './'
import test from 'tape'

test('assoc-in', t => {
  const xs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  t.deepEqual(chunkify(5, xs), [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12]])
  t.deepEqual(chunkify(1, xs), [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12]])
  t.end()
})
