# Little Libs

First make sure you have [Node.js](https://nodejs.org) installed (I recommend using [NVM](http://nvm.sh) to do so). Run `npm install` within this directory and then `npm test` to see everything pass, feel free to [open an issue](https://github.com/artcommacode/littlelibs/issues) if it doesn't.

Look at the `test.js` files within each section to get an idea of how to use the functions, or read on for more detail.

## zip

```js
const zip = <A,B>(xs: A[], ys: B[]): [A, B][] => (
  xs.map((x, i) => [x, ys[i]])
)
```

`zip` takes two arrays and returns them zipped up as pairs. If the second array is longer than the first it'll be truncated and if it's shorter it'll be extended with `undefined` values.

## pluck

```js
const pluck = (key: string, xs: Object[]): [] => (
  xs.map((x) => x[key])
)
```

`pluck` takes a key and an array of objects and returns an array of values plucked from the objects by their key.

## flatten

```js
const flatten = (xs: []): [] => (
  xs.reduce((flat, x) => (
    flat.concat(Array.isArray(x) ? flatten(x) : [x])
  ), [])
)
```

`flatten` is a recursive function that takes nested arrays of any depth and returns a flattened version.

## range

```js
const range = (length: number): number[] => [...Array(length).keys()]
```

`range` takes a length and returns an array of that size populated by values ranging from `0` to the given number (exclusive).

## partition

```js
const partition = <T>(xs: T[], fn: (x: T) => boolean): [T[], T[]] => (
  xs.reduce((p, x) => (
    fn(x) ? [p[0].concat([x]), p[1]] : [p[0], p[1].concat([x])]
  ), [[], []])
)
```

`partition` takes an array and a function to partition it by. Each value is tested by the function and if `true` is placed into the first partition and if `false` into the second.

## partial
```js
const partial = default (fn: Function, ...args: any[]): Function => (
  (...argsN: any[]) => (
    fn(...args, ...argsN)
  )
)
```

`partial` takes one function and any number of arguments and returns another function that takes any further arguments and returns the result of applying both sets of arguments to the original function. For more detail, see the Wikipedia page on [partial application](https://en.wikipedia.org/wiki/Partial_application).
