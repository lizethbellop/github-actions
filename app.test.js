const { sumar } = require('./app');

test('debe sumar dos números correctamente', () => {
    expect(sumar(2, 3)).toBe(5);
});