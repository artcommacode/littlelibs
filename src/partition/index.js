// @flow
export default <T>(xs: T[], fn: (x: T) => boolean): [T[], T[]] => (
  xs.reduce((p, x) => (
    [fn(x) ? p[0].concat([x]) : p[0], fn(x) ? p[1] : p[1].concat([x])]
  ), [[], []])
)
