export function calcularResto(dividendo: number, divisor: number): number {
    if (divisor === 0) {
      throw new Error("No se puede dividir por cero");
    }
  
    return dividendo % divisor;
  }