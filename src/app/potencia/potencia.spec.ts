// Importar la función que vamos a probar
import { calcularPotencia} from './potencia'

describe('addition unit tests', () => {
// Prueba 1
it('2 elevado a la 3 es igual a 8', () => {
  expect(calcularPotencia(2, 3)).toBe(8);
})

// Prueba 2
it('5 elevado a la 2 es igual a 25', () => {
  expect(calcularPotencia(5, 2)).toBe(25);
})

// Prueba 3
it('0 elevado a cualquier número es igual a 0', () => {
  expect(calcularPotencia(0, 10)).toBe(0);
})

// Prueba 4
it('Cualquier número elevado a la 0 es igual a 1', () => {
  expect(calcularPotencia(7, 0)).toBe(1);
})

// Prueba 5
it('Número negativo elevado a un exponente par es positivo', () => {
  expect(calcularPotencia(-2, 4)).toBe(16);
})
})