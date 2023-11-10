export function radicales(numero: number, indice: number): number {
    if (numero < 0 && indice % 2 === 0) {
      throw new Error("No se puede calcular una raíz par de un número negativo");
    }
  
    return Math.pow(numero, 1 / indice);
  }