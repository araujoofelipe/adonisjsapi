'use strict'

const { test } = use('Test/Suite')('Example')

test('Teste para ', async ({ assert }) => {
  assert.equal(2 + 2, 4)
})
