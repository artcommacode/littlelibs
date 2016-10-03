// @flow
import mapcat from './'
import test from 'tape'

test('mapcat', (t) => {
  t.deepEqual(mapcat((str) => str.split(''), ['map', 'cat']), ['m', 'a', 'p', 'c', 'a', 't'])
  t.end()
})
