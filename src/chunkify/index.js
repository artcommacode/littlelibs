// @flow
const chunkify = <T>(size: number, xs: T[]) =>
  xs.reduce(
    (xss: T[][], x: T) =>
      xss.length === 0 || xss[xss.length - 1].length === size
        ? xss.concat([[x]])
        : [
            ...xss.slice(0, xss.length - 1),
            xss[xss.length - 1].concat([x]),
            ...xss.slice(xss.length)
          ],
    []
  )
export default chunkify
