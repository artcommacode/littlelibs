// @flow
const flatten = (xs: []): [] => (
  xs.reduce((flat, x) => (
    flat.concat(Array.isArray(x) ? flatten(x) : [x])
  ), [])
)

export default flatten
