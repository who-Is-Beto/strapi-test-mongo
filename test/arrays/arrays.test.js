const array = require('./index')

test('array to be defined', () => {
  expect(array).toBeDefined()
})

test('must to contain "milk"', () => {
  expect(array).toContain('milk')
    expect(new Set(array)).toContain('milk') //Other way
})