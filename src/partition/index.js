// @flow
export default <T>(xs: T[], fn: (x: T) => boolean): [T[], T[]] =>
  xs.reduce((p, x) => (fn(x) ? [p[0].concat([x]), p[1]] : [p[0], p[1].concat([x])]), [[], []])
