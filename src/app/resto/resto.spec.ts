import { calcularResto } from "./resto";

describe('calcularResto function', () => {
    it('debería calcular el resto correctamente', () => {
      const resultado = calcularResto(10, 3);
      expect(resultado).toBe(1);
    });
  
    it('debería lanzar un error al intentar dividir por cero', () => {
      expect(() => calcularResto(10, 0)).toThrowError("No se puede dividir por cero");
    });
  
    it('debería calcular el resto correctamente para números negativos', () => {
      const resultado = calcularResto(-10, 3);
      expect(resultado).toBe(-1);
    });
  
    it('debería lanzar un error para división por cero con números negativos', () => {
      expect(() => calcularResto(-10, 0)).toThrowError("No se puede dividir por cero");
    });
});
  