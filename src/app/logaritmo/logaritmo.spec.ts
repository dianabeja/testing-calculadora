// logaritmo.spec.ts
import { logaritmo } from './logaritmo';

describe('logaritmo function', () => {
  it('debería calcular el logaritmo correctamente para base 2 y logaritmo 8', () => {
    const resultado = logaritmo(2, 8);
    expect(resultado).toBe(3);
  });

  it('debería lanzar un error al intentar calcular el logaritmo con base cero', () => {
    expect(() => logaritmo(0, 10)).toThrowError("Los valores de base y logaritmo deben ser mayores que 0.");
  });

  it('debería lanzar un error al intentar calcular el logaritmo con logaritmo cero', () => {
    expect(() => logaritmo(10, 0)).toThrowError("Los valores de base y logaritmo deben ser mayores que 0.");
  });

  it('debería calcular el logaritmo correctamente para base 10 y logaritmo 100', () => {
    const resultado = logaritmo(10, 100);
    expect(resultado).toBe(2);
  });

  it('debería lanzar un error al intentar calcular el logaritmo con valores negativos', () => {
    expect(() => logaritmo(-2, 5)).toThrowError("Los valores de base y logaritmo deben ser mayores que 0.");
  });

  it('debería lanzar un error al intentar calcular el logaritmo con base y logaritmo negativos', () => {
    expect(() => logaritmo(-2, -5)).toThrowError("Los valores de base y logaritmo deben ser mayores que 0.");
  });

});
