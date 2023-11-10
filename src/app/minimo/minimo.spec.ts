import { minimo } from "./minimo";

describe('minimo function', () => {
  it('debería devolver el número más pequeño entre 5 y 2', () => {
    const resultado = minimo(5, 2);
    expect(resultado).toBe(2);
  });

  it('debería lanzar un error al intentar comparar con cero en 10 y 0', () => {
    expect(() => minimo(10, 0)).toThrowError("Los valores de numero1 y numero2 deben ser mayores que 0.");
  });

  it('debería devolver el número más pequeño entre 10 y 3', () => {
    const resultado = minimo(10, 3);
    expect(resultado).toBe(3);
  });

  it('debería lanzar un error al intentar comparar con cero en -10 y 0', () => {
    expect(() => minimo(-10, 0)).toThrowError("Los valores de numero1 y numero2 deben ser mayores que 0.");
  });

  it('debería devolver el número más pequeño entre 5 y 5', () => {
    const resultado = minimo(5, 5);
    expect(resultado).toBe(5);
  });

});
