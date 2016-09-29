// @flow
const assocIn = (object: Object, [key, ...keys]: string[], value: any): Object => (
  {...object, [key]: keys.length ? assocIn(object[key], keys, value) : value}
)

export default assocIn
