import test from 'ava'
import Range from '../dist/range'

test('invalid constructor parameters', t => {
  t.throws(() => new Range())
  t.throws(() => new Range(0))
})

test('for of', t => {
  t.plan(5)
  for(const i of new Range(0, 5)){
    t.pass()
  }
})

test('forEach', t => {
  t.plan(5)
  const result = new Range(0, 5).forEach(() => t.pass())
})

test('forEach returns self instance', t => {
  const range = new Range(0, 5)
  const result = range.forEach(() => {})
  t.is(range, result)
})

test('map', t => {
  const expect = [0, 1, 4, 9, 16]
  t.deepEqual(new Range(0, 5).map((i) => {return i * i}), expect)
})

test('toArray', t => {
  const range = new Range(0, 5)
  const expect = [0, 1, 2, 3, 4]
  t.deepEqual(range.toArray(), expect)
})

test('toArray (string)', t => {
  const range = new Range('a', 'f')
  const expect = ['a', 'b', 'c', 'd', 'e']
  t.deepEqual(range.toArray(), expect)
})

test('toString', t => {
  t.is(new Range(0, 5).toString(), '0..5')
  t.is(new Range(0, 5, true).toString(), '0...5')
})
