import Range from './range'

test('invalid constructor parameters', () => {
  expect(() => new Range()).toThrow()
  expect(() => new Range(0)).toThrow()
  expect(() => new Range(0, '0')).toThrow()
})

test('for of', () => {
  let count = 0
  for(const i of new Range(0, 5)){
    count++
  }
  expect(count).toBe(6)
})

test('for of (excludeEnd = true)', () => {
  let count = 0
  for(const i of new Range(0, 5, true)){
    count++
  }
  expect(count).toBe(5)
})

test('forEach', () => {
  let count = 0
  new Range(0, 5).forEach(() => count++)
  expect(count).toBe(6)
})

test('forEach (excludeEnd = true)', () => {
  let count = 0
  new Range(0, 5, true).forEach(() => count++)
  expect(count).toBe(5)
})

test('forEach returns self instance', () => {
  const range = new Range(0, 5)
  const result = range.forEach(() => {})
  expect(result).toBe(range)
})

test('map', () => {
  const array = [0, 1, 4, 9, 16, 25]
  const result = new Range(0, 5).map(i => {return i * i})
  expect(result).toEqual(array)
})

test('step', () => {
  let count = 0
  new Range(0, 10).step(2, () => count++)
  expect(count).toBe(6)
})

test('step (excludeEnd = true)', () => {
  let count = 0
  new Range(0, 10, true).step(2, () => count++)
  expect(count).toBe(5)
})

test('step with argument error', () => {
  const range = new Range(0, 5)
  expect(() => range.step(0, () => {})).toThrow()
  expect(() => range.step(-1, () => {})).toThrow()
})

test('toArray', () => {
  const range = new Range(0, 5)
  const array = [0, 1, 2, 3, 4, 5]
  expect(range.toArray()).toEqual(array)
  expect(Array.from(range)).toEqual(array)
})

test('toArray (excludeEnd = true)', () => {
  const range = new Range(0, 5, true)
  const array = [0, 1, 2, 3, 4]
  expect(range.toArray()).toEqual(array)
  expect(Array.from(range)).toEqual(array)
})

test('toArray (string)', () => {
  const range = new Range('a', 'e')
  const array = ['a', 'b', 'c', 'd', 'e']
  expect(range.toArray()).toEqual(array)
  expect(Array.from(range)).toEqual(array)
})

test('toString', () => {
  expect(new Range(0, 5).toString()).toBe('0..5')
  expect(new Range(0, 5, true).toString()).toBe('0...5')
})