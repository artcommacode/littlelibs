// @flow
import assocIn from './'
import test from 'tape'

test('assoc-in', (t) => {
  const obj = {name: {first: 'Philip'}}
  t.deepEqual(assocIn(obj, ['name', 'last'], 'Wadler'), {name: {first: 'Philip', last: 'Wadler'}})
  t.deepEqual(assocIn(obj, ['birthday', 'month'], 'April'), {name: {first: 'Philip'}, birthday: {month: 'April'}})
  t.end()
})
