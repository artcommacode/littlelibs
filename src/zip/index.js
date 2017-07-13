// @flow
export default <A, B>(xs: A[], ys: B[]): [A, B][] => xs.map((x, i) => [x, ys[i]])
