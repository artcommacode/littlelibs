// @flow
import fnull from './'
import test from 'tape'

test('fnull', (t) => {
  const div = (a, b) => a / b
  const div3 = (a, b, c) => a / b / c
  t.equal(fnull(div, null, 5)(10), div(10, 5), 2)
  t.equal(fnull(div, null, 5, null)(10, 2), div(10, 5, 2), 1)
  t.end()
})
