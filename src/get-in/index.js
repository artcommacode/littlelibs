// @flow
export default (object: Object, path: string[], notFound: any = null) =>
  path.reduce((obj, seg) => (obj && obj[seg]) || notFound, object)
