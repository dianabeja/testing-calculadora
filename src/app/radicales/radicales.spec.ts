import {radicales} from './radicales'
describe('radicales function', () => {
    it('debería calcular la raíz cuadrada correctamente', () => {
      const resultado = radicales(25, 2);
      expect(resultado).toBe(5);
    });
  
    it('debería calcular la raíz cúbica correctamente', () => {
      const resultado = radicales(27, 3);
      expect(resultado).toBe(3);
    });
  
    it('debería lanzar un error para raíces pares de números negativos', () => {
      expect(() => radicales(-16, 2)).toThrowError("No se puede calcular una raíz par de un número negativo");
    });
  
    it('debería calcular la raíz cuarta correctamente', () => {
      const resultado = radicales(16, 4);
      expect(resultado).toBe(2);
    });
  
    it('debería lanzar un error para raíces negativas', () => {
        expect(() => radicales(-9, 2)).toThrowError("No se puede calcular una raíz par de un número negativo");
      });
      
  });
  