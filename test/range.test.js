import test from 'ava'
import Range from '../dist/range'

test('invalid constructor parameters', t => {
  t.throws(() => new Range())
  t.throws(() => new Range(0))
})

test('toString', t => {
  t.is(new Range(0, 5).toString(), '0..5')
  t.is(new Range(0, 5, true).toString(), '0...5')
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
