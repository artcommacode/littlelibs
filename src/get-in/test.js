// @flow
import getIn from './'
import test from 'tape'

test('get-in', (t) => {
  const obj = {name: {first: 'Philip'}}
  t.equal(getIn(obj, ['name', 'first']), 'Philip')
  t.equal(getIn(obj, ['first', 'last']), null)
  t.equal(getIn(obj, ['name', 'last'], 'Wadler'), 'Wadler')
  t.end()
})
