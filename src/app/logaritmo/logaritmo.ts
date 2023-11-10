export function logaritmo(base: number, logaritmo: number): number {
  if (base <= 0 || logaritmo <= 0) {
    throw new Error("Los valores de base y logaritmo deben ser mayores que 0.");
  }

  let result = Math.log(logaritmo) / Math.log(base);
  result = +(result.toFixed(2));
  return result;
}
