[![Build Status](https://travis-ci.org/kmdtmyk/range.js.svg?branch=master)](https://travis-ci.org/kmdtmyk/range.js)

# Range

A javascript library inspired by ruby range.

## Installation

```
npm install @kmdtmyk/range
```

## Usage

```javascript
import Range from '@kmdtmyk/range'

const range = new Range(0, 5)

for(const i of range){
  console.log(i)
}
// => 0, 1, 2, 3, 4, 5

range.toArray()
// => [0, 1, 2, 3, 4, 5]

range.forEach(i => console.log(i))
// => 0, 1, 2, 3, 4, 5

range.map(i => i * i)
// => [0, 1, 4, 9, 16, 25]

range.step(2)
// => [0, 2, 4]

new Range(0, 5, true /* exclude end */).toArray()
// => [0, 1, 2, 3, 4]
```

## License

MIT
