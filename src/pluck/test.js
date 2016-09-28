// @flow
import pluck from './'
import test from 'tape'

test('pluck', (t) => {
  t.deepEqual(pluck('name', [{name: 'Alice'}, {name: 'Dinah'}, {name: 'Rabbit'}]), ['Alice', 'Dinah', 'Rabbit'])
  t.end()
})
