// @flow
export default <T, U>(fn: (x: T) => U[], xs: T[]): U[] => (
  [].concat(...xs.map(fn))
)
