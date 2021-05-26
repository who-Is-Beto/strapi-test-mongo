const suma = require('./index');

test('definir "suma"', () => {
    expect(suma).toBeDefined()
})

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});