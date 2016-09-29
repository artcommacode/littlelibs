// @flow
import partial from './'
import test from 'tape'

test('partial', (t) => {
  const plus = (x, y, z) => x + y + z
  t.equal(
    plus(1, 2, 3),
    partial(plus, 1, 2)(3),
    partial(plus, 1)(2, 3),
    5
  )
  t.end()
})
