// @flow
export default (fn: Function, ...args: any[]): Function => (...argsN: any[]) => {
  const newArgs = args.reduce(
    ([newArgs, [next, ...rest]], arg) => [
      [...newArgs, arg === null ? next : arg],
      arg === null ? rest : [next, ...rest]
    ],
    [[], argsN]
  )[0]
  return fn(...newArgs)
}
