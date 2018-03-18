import test from 'ava'
import Range from '../dist/range'

test('toString', t => {
  t.is(new Range(0, 5).toString(), '0..5')
})
