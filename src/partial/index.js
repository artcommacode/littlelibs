// @flow
export default (fn: Function, ...args: any[]): Function => (
  (...argsN: any[]) => (
    fn(...args, ...argsN)
  )
)
