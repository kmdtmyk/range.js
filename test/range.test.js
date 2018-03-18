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
